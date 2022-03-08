import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScryfallCardFaceCountAggregate } from './scryfall-card-face-count-aggregate.output';
import { ScryfallCardFaceAvgAggregate } from './scryfall-card-face-avg-aggregate.output';
import { ScryfallCardFaceSumAggregate } from './scryfall-card-face-sum-aggregate.output';
import { ScryfallCardFaceMinAggregate } from './scryfall-card-face-min-aggregate.output';
import { ScryfallCardFaceMaxAggregate } from './scryfall-card-face-max-aggregate.output';

@ObjectType()
export class AggregateScryfallCardFace {

    @Field(() => ScryfallCardFaceCountAggregate, {nullable:true})
    _count?: ScryfallCardFaceCountAggregate;

    @Field(() => ScryfallCardFaceAvgAggregate, {nullable:true})
    _avg?: ScryfallCardFaceAvgAggregate;

    @Field(() => ScryfallCardFaceSumAggregate, {nullable:true})
    _sum?: ScryfallCardFaceSumAggregate;

    @Field(() => ScryfallCardFaceMinAggregate, {nullable:true})
    _min?: ScryfallCardFaceMinAggregate;

    @Field(() => ScryfallCardFaceMaxAggregate, {nullable:true})
    _max?: ScryfallCardFaceMaxAggregate;
}
