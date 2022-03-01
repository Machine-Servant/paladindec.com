import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionUpdateManyMutationInput } from './cards-in-collection-update-many-mutation.input';
import { CardsInCollectionWhereInput } from './cards-in-collection-where.input';

@ArgsType()
export class UpdateManyCardsInCollectionArgs {
  @Field(() => CardsInCollectionUpdateManyMutationInput, { nullable: false })
  data!: CardsInCollectionUpdateManyMutationInput;

  @Field(() => CardsInCollectionWhereInput, { nullable: true })
  where?: CardsInCollectionWhereInput;
}
