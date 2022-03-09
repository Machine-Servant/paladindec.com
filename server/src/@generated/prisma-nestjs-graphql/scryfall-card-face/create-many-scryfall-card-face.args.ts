import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceCreateManyInput } from './scryfall-card-face-create-many.input';

@ArgsType()
export class CreateManyScryfallCardFaceArgs {

    @Field(() => [ScryfallCardFaceCreateManyInput], {nullable:false})
    data!: Array<ScryfallCardFaceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
