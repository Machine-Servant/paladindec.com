import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateManyCollectionInput } from './cards-in-collection-create-many-collection.input';

@InputType()
export class CardsInCollectionCreateManyCollectionInputEnvelope {
  @Field(() => [CardsInCollectionCreateManyCollectionInput], {
    nullable: false,
  })
  data!: Array<CardsInCollectionCreateManyCollectionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
