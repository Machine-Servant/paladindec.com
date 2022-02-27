import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CardCount {
  @Field(() => Int, { nullable: false })
  relatedTo?: number;

  @Field(() => Int, { nullable: false })
  referencedBy?: number;

  @Field(() => Int, { nullable: false })
  cardFaces?: number;
}
