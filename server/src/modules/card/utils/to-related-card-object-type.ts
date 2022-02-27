import { RelatedCard } from '../../../@generated/prisma-nestjs-graphql/related-card/related-card.model';
import { RelatedCardDataType } from '../../scryfall/types/scryfall.types';

export function toRelatedCardObjectType(
  data: RelatedCardDataType,
): RelatedCard {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type_line: typeLine, component, id, name, object, uri } = data;

  const relatedCardData: Omit<RelatedCard, 'cardId' | 'referenceId'> = {
    typeLine,
    component,
    id,
    name,
    uri,
  };

  return Object.assign({}, new RelatedCard(), relatedCardData);
}
