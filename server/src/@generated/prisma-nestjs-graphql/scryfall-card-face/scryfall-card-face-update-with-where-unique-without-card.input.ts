import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';
import { ScryfallCardFaceUpdateWithoutCardInput } from './scryfall-card-face-update-without-card.input';

@InputType()
export class ScryfallCardFaceUpdateWithWhereUniqueWithoutCardInput {

    @Field(() => ScryfallCardFaceWhereUniqueInput, {nullable:false})
    where!: ScryfallCardFaceWhereUniqueInput;

    @Field(() => ScryfallCardFaceUpdateWithoutCardInput, {nullable:false})
    data!: ScryfallCardFaceUpdateWithoutCardInput;
}
