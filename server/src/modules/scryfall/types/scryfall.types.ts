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

export type BulkDataResponseType = ResponseType<'list', BulkDataType[]>;
