import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class CardFacesAvgAggregate {
  @Field(() => GraphQLDecimal, { nullable: true })
  cmc?: any;
}
