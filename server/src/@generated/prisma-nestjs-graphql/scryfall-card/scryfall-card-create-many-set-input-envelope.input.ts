import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateManySetInput } from './scryfall-card-create-many-set.input';

@InputType()
export class ScryfallCardCreateManySetInputEnvelope {

    @Field(() => [ScryfallCardCreateManySetInput], {nullable:false})
    data!: Array<ScryfallCardCreateManySetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
