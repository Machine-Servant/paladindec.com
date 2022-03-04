import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateManyCardInput } from './scryfall-related-card-create-many-card.input';

@InputType()
export class ScryfallRelatedCardCreateManyCardInputEnvelope {

    @Field(() => [ScryfallRelatedCardCreateManyCardInput], {nullable:false})
    data!: Array<ScryfallRelatedCardCreateManyCardInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
