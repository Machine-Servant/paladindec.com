import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@ArgsType()
export class FindUniqueCollectionArgs {
  @Field(() => CollectionWhereUniqueInput, { nullable: false })
  where!: CollectionWhereUniqueInput;
}
