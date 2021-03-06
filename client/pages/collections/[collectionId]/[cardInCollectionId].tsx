import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Card, CardsInCollection, Tag } from '../../../@types/codegen/graphql';
import { AppLayout } from '../../../components/app-layout';
import {
  CardDetails,
  CardDetailsCardInCollection,
} from '../../../components/pages/card-details';
import { GraphQLClient } from '../../../graphql/graphql-client';
import { useProtectedRoute } from '../../../hooks/useProtectedRoute';
import { Logger } from '../../../utils/logger';

type CardDetailsPageQueryType = {
  cardInCollectionId: string;
  collectionId: string;
};

type CardDetailsPageProps = {
  cardsInCollection: CardDetailsCardInCollection;
  otherPrintings: Partial<Card>[];
  allCardsInCollection: Partial<CardsInCollection>[];
  allTags: Pick<Tag, 'id' | 'name'>[];
};

function isCardDetailsPageQueryType(
  query: ParsedUrlQuery,
): query is CardDetailsPageQueryType {
  return (
    typeof query.cardInCollectionId === 'string' &&
    typeof query.collectionId === 'string'
  );
}

const CardDetailsPage: React.FC<CardDetailsPageProps> = (props) => {
  const { loading } = useProtectedRoute();

  return (
    <AppLayout title="Card Details" loading={loading}>
      <CardDetails
        cardsInCollection={props.cardsInCollection}
        otherPrintings={props.otherPrintings}
        allCardsInCollection={props.allCardsInCollection}
        tags={props.allTags}
      />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!isCardDetailsPageQueryType(context.query))
    return {
      props: {},
    };

  const logger = new Logger(
    `${CardDetailsPage.name}_${getServerSideProps.name}`,
  );

  const today = new Date();
  const lastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate(),
  );

  const client = new GraphQLClient();

  const GET_CARD_DETAILS_QUERY = gql`
    query GetCardInCollection($id: String!, $date: DateTime!) {
      cardsInCollection(where: { id: { equals: $id } }) {
        id
        isFoil
        isEtched
        price {
          usd
        }
        count
        collection {
          id
          name
          userId
        }
        tags {
          id
          name
        }
        card {
          name
          isRetro
          isShowcase
          isBorderless
          isExtendedArt
          canBeFoil
          canBeEtched
          canBeNonFoil
          scryfallCard {
            imageUris
            oracleText
            typeLine
            manaCost
            rarity
            legalities
            collectorNumber
            scryfallPrice(
              where: { date: { gte: $date } }
              orderBy: [{ date: asc }]
            ) {
              date
              usd
              usdFoil
              usdEtched
            }
            set {
              name
              code
              iconSvgUri
            }
          }
        }
      }
      allTags {
        id
        name
      }
    }
  `;

  const results = await client.value.query({
    query: GET_CARD_DETAILS_QUERY,
    variables: {
      id: context.query.cardInCollectionId,
      date: lastMonth,
    },
    context: {
      headers: {
        ...context.req.headers,
      },
    },
  });

  const GET_OTHER_PRINTINGS_BY_NAME_QUERY = gql`
    query GetOtherPrintingsByCardName($name: String!, $collectionId: String!) {
      otherPrintings: allCards(
        where: { name: { equals: $name }, isPaper: { equals: true } }
      ) {
        id
        name
        currentPrice {
          usd
          usdFoil
          usdEtched
        }
        canBeFoil
        canBeEtched
        canBeNonFoil
        isRetro
        isShowcase
        isBorderless
        isExtendedArt
        scryfallCard {
          collectorNumber
          set {
            name
            code
            iconSvgUri
          }
          rarity
        }
      }
      allCardsInCollection(
        where: {
          collectionId: { equals: $collectionId }
          card: { is: { name: { equals: $name } } }
        }
      ) {
        id
        isFoil
        isEtched
        card {
          isRetro
          isShowcase
          isBorderless
          isExtendedArt
          scryfallCard {
            imageUris
            rarity
            collectorNumber
            set {
              name
              code
              iconSvgUri
            }
          }
        }
        count
      }
    }
  `;
  const otherPrintingResults = await client.value.query({
    query: GET_OTHER_PRINTINGS_BY_NAME_QUERY,
    variables: {
      name: results.data.cardsInCollection.card.name,
      collectionId: context.query.collectionId,
    },
    context: {
      headers: {
        ...context.req.headers,
      },
    },
  });

  return {
    props: {
      cardsInCollection: results.data.cardsInCollection,
      otherPrintings: otherPrintingResults.data.otherPrintings,
      allCardsInCollection: otherPrintingResults.data.allCardsInCollection,
      allTags: results.data.allTags,
    },
  };
};

export default CardDetailsPage;
