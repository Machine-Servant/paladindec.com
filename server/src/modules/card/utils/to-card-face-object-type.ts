import { CardFace } from '../../../@generated/prisma-nestjs-graphql/card-face/card-face.model';
import { CardFaceDataType } from '../../scryfall/types/scryfall.types';

export function toCardFaceObjectType(data: CardFaceDataType): CardFace {
  const {
    mana_cost: manaCost,
    color_indicator: colorIndicator,
    flavor_text: flavorText,
    illustration_id: illustrationId,
    image_uris: imageUris,
    oracle_id: oracleId,
    oracle_text: oracleText,
    printed_name: printedName,
    printed_text: printedText,
    printed_type_line: printedTypeLine,
    type_line: typeLine,
    name,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    object,
    artist,
    cmc,
    colors,
    layout,
    loyalty,
    power,
    toughness,
    watermark,
  } = data;

  const cardFaceData: Omit<CardFace, 'id' | 'cardId'> = {
    manaCost,
    colorIndicator,
    flavorText,
    illustrationId,
    imageUris,
    oracleId,
    oracleText,
    printedName,
    printedText,
    printedTypeLine,
    typeLine,
    name,
    artist,
    cmc,
    colors,
    layout,
    loyalty,
    power,
    toughness,
    watermark,
  };

  return Object.assign({}, new CardFace(), cardFaceData);
}
