import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CardFacesCountAggregate } from './card-faces-count-aggregate.output';
import { CardFacesAvgAggregate } from './card-faces-avg-aggregate.output';
import { CardFacesSumAggregate } from './card-faces-sum-aggregate.output';
import { CardFacesMinAggregate } from './card-faces-min-aggregate.output';
import { CardFacesMaxAggregate } from './card-faces-max-aggregate.output';

@ObjectType()
export class AggregateCardFaces {
  @Field(() => CardFacesCountAggregate, { nullable: true })
  _count?: CardFacesCountAggregate;

  @Field(() => CardFacesAvgAggregate, { nullable: true })
  _avg?: CardFacesAvgAggregate;

  @Field(() => CardFacesSumAggregate, { nullable: true })
  _sum?: CardFacesSumAggregate;

  @Field(() => CardFacesMinAggregate, { nullable: true })
  _min?: CardFacesMinAggregate;

  @Field(() => CardFacesMaxAggregate, { nullable: true })
  _max?: CardFacesMaxAggregate;
}
