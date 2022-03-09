import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';
import { ScryfallCardFaceUpdateWithoutCardInput } from './scryfall-card-face-update-without-card.input';
import { ScryfallCardFaceCreateWithoutCardInput } from './scryfall-card-face-create-without-card.input';

@InputType()
export class ScryfallCardFaceUpsertWithWhereUniqueWithoutCardInput {

    @Field(() => ScryfallCardFaceWhereUniqueInput, {nullable:false})
    where!: ScryfallCardFaceWhereUniqueInput;

    @Field(() => ScryfallCardFaceUpdateWithoutCardInput, {nullable:false})
    update!: ScryfallCardFaceUpdateWithoutCardInput;

    @Field(() => ScryfallCardFaceCreateWithoutCardInput, {nullable:false})
    create!: ScryfallCardFaceCreateWithoutCardInput;
}
