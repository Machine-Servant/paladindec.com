import { ScryfallCard } from 'prisma/prisma-client';
import { ScryfallCardDataType } from '../types/scryfall.types';

export function toCardObjectType(data: ScryfallCardDataType): ScryfallCard {
  const {
    oracle_id: oracleId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    object,
    prints_search_uri: printsSearchUri,
    ruling_uri: rulingUri,
    arena_id: arenaId,
    scryfall_uri: scryfallUri,
    cardmarket_id: cardmarketId,
    mtgo_foil_id: mtgoFoilId,
    mtgo_id: mtgoId,
    tcgplayer_etched_id: tcgplayerEtchedId,
    multiverse_ids: multiverseIds,
    tcgplayer_id: tcgplayerId,
    id,
    lang,
    uri,

    color_identity: colorIdentity,
    type_line: typeLine,
    all_parts: allParts,
    card_faces: cardFacesRaw,
    color_indicator: colorIndicator,
    edhrec_rank: edhrecRank,
    hand_modifier: handModifier,
    life_modifier: lifeModifier,
    mana_cost: manaCost,
    oracle_text: oracleText,
    produced_mana: producedMana,
    cmc,
    keywords,
    layout,
    legalities,
    name,
    oversized,
    reserved,
    colors,
    loyalty,
    power,
    toughness,

    border_color: borderColor,
    card_back_id: cardBackId,
    collector_number: collectorNumber,
    full_art: fullArt,
    highres_image: highresImage,
    image_status: imageStatus,
    purchase_uris: purchaseUris,
    related_uris: relatedUris,
    released_at: releasedAt,
    scryfall_set_uri: scryfallSetUri,
    set_id: setId,
    set_name: setName,
    set_search_uri: setSearchUri,
    set_type: setType,
    set_uri: setUri,
    story_spotlight: storySpotlight,
    content_warning: contentWarning,
    flavor_name: flavorName,
    frame_effects: frameEffects,
    illustration_id: illustrationId,
    image_uris: imageUris,
    printed_name: printedName,
    printed_text: printedText,
    printed_type_line: printedTypeLine,
    promo_types: promoTypes,
    security_stamp: securityStamp,
    variation_of: varationOf,
    booster,
    digital,
    finishes,
    frame,
    games,
    prices,
    promo,
    rarity,
    reprint,
    set,
    textless,
    variation,
    artist,
    watermark,
  } = data;

  return {
    oracleId,
    printsSearchUri,
    rulingUri,
    arenaId,
    scryfallUri,
    cardmarketId,
    mtgoFoilId,
    mtgoId,
    tcgplayerEtchedId,
    multiverseIds,
    tcgplayerId,
    id,
    lang,
    uri,

    colorIdentity,
    typeLine,
    allParts,
    cardFacesRaw,
    colorIndicator,
    edhrecRank,
    handModifier,
    lifeModifier,
    manaCost,
    oracleText,
    producedMana,
    cmc,
    keywords,
    layout,
    legalities,
    name,
    oversized,
    reserved,
    colors,
    loyalty,
    power,
    toughness,

    artist,
    booster,
    borderColor,
    cardBackId,
    collectorNumber,
    contentWarning,
    digital,
    finishes,
    flavorName,
    frame,
    frameEffects,
    fullArt,
    games,
    highresImage,
    illustrationId,
    imageStatus,
    imageUris,
    prices,
    printedName,
    printedText,
    printedTypeLine,
    promo,
    promoTypes,
    purchaseUris: purchaseUris ? purchaseUris : undefined,
    rarity,
    relatedUris,
    releasedAt: new Date(releasedAt),
    reprint,
    scryfallSetUri,
    securityStamp,
    setCode: set,
    setId,
    setName,
    setSearchUri,
    setType,
    setUri,
    storySpotlight,
    textless,
    varationOf,
    variation,
    watermark,
  };
}