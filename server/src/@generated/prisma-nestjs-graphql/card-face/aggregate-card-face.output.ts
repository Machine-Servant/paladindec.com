import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CardFaceCountAggregate } from './card-face-count-aggregate.output';
import { CardFaceAvgAggregate } from './card-face-avg-aggregate.output';
import { CardFaceSumAggregate } from './card-face-sum-aggregate.output';
import { CardFaceMinAggregate } from './card-face-min-aggregate.output';
import { CardFaceMaxAggregate } from './card-face-max-aggregate.output';

@ObjectType()
export class AggregateCardFace {
  @Field(() => CardFaceCountAggregate, { nullable: true })
  _count?: CardFaceCountAggregate;

  @Field(() => CardFaceAvgAggregate, { nullable: true })
  _avg?: CardFaceAvgAggregate;

  @Field(() => CardFaceSumAggregate, { nullable: true })
  _sum?: CardFaceSumAggregate;

  @Field(() => CardFaceMinAggregate, { nullable: true })
  _min?: CardFaceMinAggregate;

  @Field(() => CardFaceMaxAggregate, { nullable: true })
  _max?: CardFaceMaxAggregate;
}
