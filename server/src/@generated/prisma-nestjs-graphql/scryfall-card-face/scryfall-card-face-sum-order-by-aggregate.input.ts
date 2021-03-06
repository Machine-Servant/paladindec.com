import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ScryfallCardFaceSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    cmc?: keyof typeof SortOrder;
}
