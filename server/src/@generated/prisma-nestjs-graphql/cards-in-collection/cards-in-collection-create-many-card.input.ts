import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CardsInCollectionCreateManyCardInput {
  @Field(() => String, { nullable: false })
  collectionId!: string;

  @Field(() => Boolean, { nullable: true })
  isFoil?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEtched?: boolean;

  @Field(() => Int, { nullable: true })
  count?: number;
}
