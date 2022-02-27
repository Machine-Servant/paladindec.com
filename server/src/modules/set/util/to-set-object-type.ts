import { Set } from '../../../@generated/prisma-nestjs-graphql/set/set.model';
import { SetDataType } from '../../scryfall/types/scryfall.types';

export function toSetObjectType(data: SetDataType): Set {
  const {
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
    object,
    ...rest
  } = data;

  return Object.assign({}, new Set(), {
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
    ...rest,
  });
}
