import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardNameCreateManyInput } from './scryfall-card-name-create-many.input';

@ArgsType()
export class CreateManyScryfallCardNameArgs {

    @Field(() => [ScryfallCardNameCreateManyInput], {nullable:false})
    data!: Array<ScryfallCardNameCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
