import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceUpdateInput } from './scryfall-card-face-update.input';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';

@ArgsType()
export class UpdateOneScryfallCardFaceArgs {

    @Field(() => ScryfallCardFaceUpdateInput, {nullable:false})
    data!: ScryfallCardFaceUpdateInput;

    @Field(() => ScryfallCardFaceWhereUniqueInput, {nullable:false})
    where!: ScryfallCardFaceWhereUniqueInput;
}
