import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardsInCollectionWhereInput } from './cards-in-collection-where.input';
import { CardsInCollectionOrderByWithAggregationInput } from './cards-in-collection-order-by-with-aggregation.input';
import { CardsInCollectionScalarFieldEnum } from './cards-in-collection-scalar-field.enum';
import { CardsInCollectionScalarWhereWithAggregatesInput } from './cards-in-collection-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CardsInCollectionCountAggregateInput } from './cards-in-collection-count-aggregate.input';
import { CardsInCollectionAvgAggregateInput } from './cards-in-collection-avg-aggregate.input';
import { CardsInCollectionSumAggregateInput } from './cards-in-collection-sum-aggregate.input';
import { CardsInCollectionMinAggregateInput } from './cards-in-collection-min-aggregate.input';
import { CardsInCollectionMaxAggregateInput } from './cards-in-collection-max-aggregate.input';

@ArgsType()
export class CardsInCollectionGroupByArgs {

    @Field(() => CardsInCollectionWhereInput, {nullable:true})
    where?: CardsInCollectionWhereInput;

    @Field(() => [CardsInCollectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CardsInCollectionOrderByWithAggregationInput>;

    @Field(() => [CardsInCollectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CardsInCollectionScalarFieldEnum>;

    @Field(() => CardsInCollectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: CardsInCollectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CardsInCollectionCountAggregateInput, {nullable:true})
    _count?: CardsInCollectionCountAggregateInput;

    @Field(() => CardsInCollectionAvgAggregateInput, {nullable:true})
    _avg?: CardsInCollectionAvgAggregateInput;

    @Field(() => CardsInCollectionSumAggregateInput, {nullable:true})
    _sum?: CardsInCollectionSumAggregateInput;

    @Field(() => CardsInCollectionMinAggregateInput, {nullable:true})
    _min?: CardsInCollectionMinAggregateInput;

    @Field(() => CardsInCollectionMaxAggregateInput, {nullable:true})
    _max?: CardsInCollectionMaxAggregateInput;
}
