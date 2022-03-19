import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Card, CardsInCollection } from '../../../@types/codegen/graphql';
import { AppLayout } from '../../../components/app-layout';
import { CardDetails } from '../../../components/pages/card-details';
import { GraphQLClient } from '../../../graphql/graphql-client';
import { useProtectedRoute } from '../../../hooks/useProtectedRoute';

type CardDetailsPageQueryType = {
  cardInCollectionId: string;
  collectionId: string;
};

type CardDetailsPageProps = {
  cardsInCollection: Partial<CardsInCollection>;
  otherPrintings: Partial<Card>[];
  allCardsInCollection: Partial<CardsInCollection>[];
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
      />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!isCardDetailsPageQueryType(context.query))
    return {
      props: {},
    };

  const client = new GraphQLClient();

  const GET_CARD_DETAILS_QUERY = gql`
    query GetCardInCollection($id: String!) {
      cardsInCollection(where: { id: { equals: $id } }) {
        id
        isFoil
        isEtched
        price {
          usd
        }
        count
        card {
          name
          isRetro
          isShowcase
          isBorderless
          isExtendedArt
          scryfallCard {
            imageUris
            oracleText
            typeLine
            manaCost
            rarity
            legalities
            collectorNumber
            set {
              name
              code
              iconSvgUri
            }
          }
        }
      }
    }
  `;
  const results = await client.value.query({
    query: GET_CARD_DETAILS_QUERY,
    variables: { id: context.query.cardInCollectionId },
    context: {
      headers: {
        ...context.req.headers,
      },
    },
  });

  const GET_OTHER_PRINTINGS_BY_NAME_QUERY = gql`
    query GetOtherPrintingsByCardName($name: String!, $collectionId: String!) {
      otherPrintings: allCards(where: { name: { equals: $name } }) {
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
    },
  };
};

export default CardDetailsPage;
