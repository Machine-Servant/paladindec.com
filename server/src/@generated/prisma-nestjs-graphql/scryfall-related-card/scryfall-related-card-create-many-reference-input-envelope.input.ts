import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateManyReferenceInput } from './scryfall-related-card-create-many-reference.input';

@InputType()
export class ScryfallRelatedCardCreateManyReferenceInputEnvelope {

    @Field(() => [ScryfallRelatedCardCreateManyReferenceInput], {nullable:false})
    data!: Array<ScryfallRelatedCardCreateManyReferenceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
