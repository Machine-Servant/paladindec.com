import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallPriceUpdateManyMutationInput } from './scryfall-price-update-many-mutation.input';
import { ScryfallPriceWhereInput } from './scryfall-price-where.input';

@ArgsType()
export class UpdateManyScryfallPriceArgs {

    @Field(() => ScryfallPriceUpdateManyMutationInput, {nullable:false})
    data!: ScryfallPriceUpdateManyMutationInput;

    @Field(() => ScryfallPriceWhereInput, {nullable:true})
    where?: ScryfallPriceWhereInput;
}
