import { ScryfallRelatedCard } from 'prisma/prisma-client';
import { ScryfallRelatedCardDataType } from '../types/scryfall.types';

export function toPrismaScryfallRelatedCard(
  data: ScryfallRelatedCardDataType,
): Partial<ScryfallRelatedCard> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type_line: typeLine, component, id, name, object, uri } = data;

  return {
    typeLine,
    component,
    id,
    name,
    uri,
  };
}
