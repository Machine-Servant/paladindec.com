import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BulkDataObjectType {
  @Field(() => String, {
    description: 'The object type for this bulk item (always "bulk_data")',
  })
  object!: string;

  @Field(() => String, { description: 'The unique ID for this bulk item' })
  id!: string;

  @Field(() => String, { description: 'The Scryfall API URI for this file' })
  uri!: string;

  @Field(() => String, {
    description: 'A computer-readable string for the kind of bulk item',
  })
  type!: string;

  @Field(() => String, { description: 'A human-readable string for this file' })
  name!: string;

  @Field(() => String, {
    description: 'A human-readable description for this file',
  })
  description!: string;

  @Field(() => String, {
    description: 'The URI that hosts this bulk file for fetching',
  })
  downloadUri!: string;

  @Field(() => Date, {
    description: 'The time when this file was last updated',
  })
  updatedAt!: Date;

  @Field(() => Int, { description: 'The size of this file in integer bites' })
  compressedSize!: number;

  @Field(() => String, { description: 'The MIME type of this file' })
  contentType!: string;

  @Field(() => String, {
    description:
      'The Content-Encoding encoding that will be used to transmit this file when you download it',
  })
  contentEncoding!: string;
}
