import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';

@ArgsType()
export class DeleteManyCollectionArgs {
  @Field(() => CollectionWhereInput, { nullable: true })
  where?: CollectionWhereInput;
}
