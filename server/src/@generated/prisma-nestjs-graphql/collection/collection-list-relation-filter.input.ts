import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';

@InputType()
export class CollectionListRelationFilter {
  @Field(() => CollectionWhereInput, { nullable: true })
  every?: CollectionWhereInput;

  @Field(() => CollectionWhereInput, { nullable: true })
  some?: CollectionWhereInput;

  @Field(() => CollectionWhereInput, { nullable: true })
  none?: CollectionWhereInput;
}
