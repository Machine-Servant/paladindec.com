import { ScryfallSetType } from './scryfall-set.types';

export type ScryfallResponseType<T extends string, P> = {
  object: T;
  has_more: boolean;
  data: P;
};

export type ScryfallBulkDataType = {
  object: string;
  id: string;
  uri: string;
  type: string;
  name: string;
  description: string;
  download_uri: string;
  updated_at: string;
  compressed_size: number;
  content_type: string;
  content_encoding: string;
};

export type ScryfallSetDataType = {
  id: string;
  arena_code?: string;
  code: string;
  mtgo_code?: string;
  tcgplayer_id?: number;
  name: string;
  set_type: ScryfallSetType;
  released_at?: string;
  block_code?: string;
  block?: string;
  parent_set_code?: string;
  card_count: number;
  printed_size: number;
  digital: boolean;
  foil_only: boolean;
  nonfoil_only: boolean;
  scryfall_uri: string;
  uri: string;
  icon_svg_uri: string;
  search_uri: string;
  object: string;
};

export type ScryfallRelatedCardDataType = {
  id: string;
  object: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
};

export type ScryfallColorDataType = string[];

export type ImageUrisDataType = {
  small?: string;
  normal?: string;
  large?: string;
  png?: string;
  art_crop?: string;
  border_crop?: string;
};

export type ScryfallCardFaceDataType = {
  artist?: string;
  cmc?: number;
  color_indicator?: ScryfallColorDataType;
  colors?: ScryfallColorDataType;
  flavor_text?: string;
  illustration_id?: string;
  image_uris?: ImageUrisDataType;
  layout?: string;
  loyalty?: string;
  mana_cost: string;
  name: string;
  object: string;
  oracle_id?: string;
  oracle_text?: string;
  power?: string;
  printed_name?: string;
  printed_text?: string;
  printed_type_line?: string;
  toughness?: string;
  type_line?: string;
  watermark?: string;
};

export type ScryfallLegalitiesDataType =
  | 'legal'
  | 'not_legal'
  | 'restricted'
  | 'banned';

export type ScryfallFinishesDataType = 'foil' | 'nonfoil' | 'etched' | 'glossy';

export type BorderColorDataType =
  | 'black'
  | 'white'
  | 'borderless'
  | 'silver'
  | 'gold';

export type ScryfallFrameDataType = '1993' | '1997' | '2003' | '2015';

export type ScryfallPricesDataType = {
  usd?: string;
  usd_foil: string;
  usd_etched: string;
  eur: string;
  eur_foil: string;
  tix: string;
};

export type ScryfallRarityDataType =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'mythic'
  | 'special'
  | 'bonus';

export type ScryfallCardDataType = {
  // Core Fields
  id: string;
  arena_id?: number;
  lang: string;
  mtgo_id?: number;
  mtgo_foil_id?: number;
  multiverse_ids?: number[];
  tcgplayer_id?: number;
  tcgplayer_etched_id?: number;
  cardmarket_id?: number;
  object: string;
  oracle_id: string;
  prints_search_uri: string;
  ruling_uri: string;
  scryfall_uri: string;
  uri: string;

  // Gameplay Fields
  all_parts?: ScryfallRelatedCardDataType[];
  card_faces?: ScryfallCardFaceDataType[];
  cmc: number;
  color_identity: ScryfallColorDataType;
  color_indicator?: ScryfallColorDataType;
  colors?: ScryfallColorDataType;
  edhrec_rank?: number;
  hand_modifier?: string;
  keywords: string[];
  layout: string;
  legalities: Record<string, ScryfallLegalitiesDataType>;
  life_modifier?: string;
  loyalty?: string;
  mana_cost?: string;
  name: string;
  oracle_text?: string;
  oversized: boolean;
  power?: string;
  produced_mana?: ScryfallColorDataType;
  reserved: boolean;
  toughness?: string;
  type_line: string;

  // Print Fields
  artist?: string;
  booster: boolean;
  border_color: BorderColorDataType;
  card_back_id: string;
  collector_number: string;
  content_warning?: boolean;
  digital: boolean;
  finishes: ScryfallFinishesDataType[];
  flavor_name?: string;
  frame_effects?: string[];
  frame: ScryfallFrameDataType;
  full_art: boolean;
  games: string[];
  highres_image: boolean;
  illustration_id?: string;
  image_status: string;
  image_uris?: ImageUrisDataType;
  prices: ScryfallPricesDataType;
  printed_name?: string;
  printed_text?: string;
  printed_type_line?: string;
  promo: boolean;
  promo_types?: string[];
  purchase_uris: Record<string, string>;
  rarity: ScryfallRarityDataType;
  related_uris: Record<string, string>;
  released_at: string;
  reprint: boolean;
  scryfall_set_uri: string;
  set_name: string;
  set_search_uri: string;
  set_type: string;
  set_uri: string;
  set: string;
  set_id: string;
  story_spotlight: boolean;
  textless: boolean;
  variation: boolean;
  variation_of?: string;
  security_stamp?: string;
  watermark?: string;
};

export type ScryfallBulkDataResponseType = ScryfallResponseType<
  'list',
  ScryfallBulkDataType[]
>;
export type ScryfallSetDataListResponseType = ScryfallResponseType<
  'list',
  ScryfallSetDataType[]
>;
