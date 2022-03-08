import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateManyInput } from './scryfall-related-card-create-many.input';

@ArgsType()
export class CreateManyScryfallRelatedCardArgs {

    @Field(() => [ScryfallRelatedCardCreateManyInput], {nullable:false})
    data!: Array<ScryfallRelatedCardCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
