import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';

@ArgsType()
export class DeleteOneScryfallCardFaceArgs {

    @Field(() => ScryfallCardFaceWhereUniqueInput, {nullable:false})
    where!: ScryfallCardFaceWhereUniqueInput;
}
