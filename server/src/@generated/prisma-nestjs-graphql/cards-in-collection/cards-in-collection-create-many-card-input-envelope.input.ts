import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateManyCardInput } from './cards-in-collection-create-many-card.input';

@InputType()
export class CardsInCollectionCreateManyCardInputEnvelope {
  @Field(() => [CardsInCollectionCreateManyCardInput], { nullable: false })
  data!: Array<CardsInCollectionCreateManyCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
