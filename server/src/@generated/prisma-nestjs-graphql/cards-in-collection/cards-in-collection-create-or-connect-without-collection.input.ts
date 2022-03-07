import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionCreateWithoutCollectionInput } from './cards-in-collection-create-without-collection.input';

@InputType()
export class CardsInCollectionCreateOrConnectWithoutCollectionInput {
  @Field(() => CardsInCollectionWhereUniqueInput, { nullable: false })
  where!: CardsInCollectionWhereUniqueInput;

  @Field(() => CardsInCollectionCreateWithoutCollectionInput, {
    nullable: false,
  })
  create!: CardsInCollectionCreateWithoutCollectionInput;
}
