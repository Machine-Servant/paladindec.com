import { ScryfallSet } from 'prisma/prisma-client';
import { ScryfallSetDataType } from '../types/scryfall.types';

export function toPrismaScryfallSet(data: ScryfallSetDataType): ScryfallSet {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    object,

    arena_code: arenaCode,
    block_code: blockCode,
    card_count: cardCount,
    digital: isDigital,
    foil_only: isFoilOnly,
    icon_svg_uri: iconSvgUri,
    nonfoil_only: isNonFoilOnly,
    scryfall_uri: scryfallUri,
    search_uri: searchUri,
    set_type: setType,
    mtgo_code: mtgoCode,
    printed_size: printedSize,
    parent_set_code: parentSetCode,
    released_at: releasedAt,
    tcgplayer_id: tcgPlayerId,
    code,
    id,
    name,
    uri,
    block,
  } = data;

  return {
    arenaCode,
    blockCode,
    cardCount,
    isDigital,
    isFoilOnly,
    iconSvgUri,
    isNonFoilOnly,
    scryfallUri,
    searchUri,
    setType,
    mtgoCode,
    printedSize,
    parentSetCode,
    releasedAt: new Date(releasedAt),
    tcgPlayerId,
    code,
    id,
    name,
    uri,
    block,
  };
}
