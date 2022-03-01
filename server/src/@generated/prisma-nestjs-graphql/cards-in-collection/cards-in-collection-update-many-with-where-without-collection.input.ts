import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionScalarWhereInput } from './cards-in-collection-scalar-where.input';
import { CardsInCollectionUpdateManyMutationInput } from './cards-in-collection-update-many-mutation.input';

@InputType()
export class CardsInCollectionUpdateManyWithWhereWithoutCollectionInput {
  @Field(() => CardsInCollectionScalarWhereInput, { nullable: false })
  where!: CardsInCollectionScalarWhereInput;

  @Field(() => CardsInCollectionUpdateManyMutationInput, { nullable: false })
  data!: CardsInCollectionUpdateManyMutationInput;
}
