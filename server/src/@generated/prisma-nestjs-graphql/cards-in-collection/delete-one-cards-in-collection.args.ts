import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';

@ArgsType()
export class DeleteOneCardsInCollectionArgs {
  @Field(() => CardsInCollectionWhereUniqueInput, { nullable: false })
  where!: CardsInCollectionWhereUniqueInput;
}
