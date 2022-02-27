import { SetType } from '../../set/types/set.types';

export type ResponseType<T extends string, P> = {
  object: T;
  has_more: boolean;
  data: P;
};

export type BulkDataType = {
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

export type SetDataType = {
  id: string;
  arena_code?: string;
  code: string;
  mtgo_code?: string;
  tcgplayer_id?: number;
  name: string;
  set_type: SetType;
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

export type RelatedCardDataType = {
  id: string;
  object: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
};

export type ColorDataType = string[];

export type ImageUrisDataType = {
  small?: string;
  normal?: string;
  large?: string;
  png?: string;
  art_crop?: string;
  border_crop?: string;
};

export type CardFaceDataType = {
  artist?: string;
  cmc?: number;
  color_indicator?: ColorDataType;
  colors?: ColorDataType;
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

export type LegalitiesDataType =
  | 'legal'
  | 'not_legal'
  | 'restricted'
  | 'banned';

export type FinishesDataType = 'foil' | 'nonfoil' | 'etched' | 'glossy';

export type BorderColorDataType =
  | 'black'
  | 'white'
  | 'borderless'
  | 'silver'
  | 'gold';

export type FrameDataType = '1993' | '1997' | '2003' | '2015';

export type PricesDataType = {
  usd?: string;
  usd_foil: string;
  usd_etched: string;
  eur: string;
  eur_foil: string;
  tix: string;
};

export type RarityDataType =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'mythic'
  | 'special'
  | 'bonus';

export type CardDataType = {
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
  all_parts?: RelatedCardDataType[];
  card_faces?: CardFaceDataType[];
  cmc: number;
  color_identity: ColorDataType;
  color_indicator?: ColorDataType;
  colors?: ColorDataType;
  edhrec_rank?: number;
  hand_modifier?: string;
  keywords: string[];
  layout: string;
  legalities: Record<string, LegalitiesDataType>;
  life_modifier?: string;
  loyalty?: string;
  mana_cost?: string;
  name: string;
  oracle_text?: string;
  oversized: boolean;
  power?: string;
  produced_mana?: ColorDataType;
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
  finishes: FinishesDataType[];
  flavor_name?: string;
  frame_effects?: string[];
  frame: FrameDataType;
  full_art: boolean;
  games: string[];
  highres_image: boolean;
  illustration_id?: string;
  image_status: string;
  image_uris?: ImageUrisDataType;
  prices: PricesDataType;
  printed_name?: string;
  printed_text?: string;
  printed_type_line?: string;
  promo: boolean;
  promo_types?: string[];
  purchase_uris: Record<string, string>;
  rarity: RarityDataType;
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

export type BulkDataResponseType = ResponseType<'list', BulkDataType[]>;
export type SetDataListResponseType = ResponseType<'list', SetDataType[]>;
