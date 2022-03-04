import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutCardFacesInput } from './scryfall-card-create-without-card-faces.input';
import { ScryfallCardCreateOrConnectWithoutCardFacesInput } from './scryfall-card-create-or-connect-without-card-faces.input';
import { ScryfallCardUpsertWithoutCardFacesInput } from './scryfall-card-upsert-without-card-faces.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithoutCardFacesInput } from './scryfall-card-update-without-card-faces.input';

@InputType()
export class ScryfallCardUpdateOneRequiredWithoutCardFacesInput {

    @Field(() => ScryfallCardCreateWithoutCardFacesInput, {nullable:true})
    create?: ScryfallCardCreateWithoutCardFacesInput;

    @Field(() => ScryfallCardCreateOrConnectWithoutCardFacesInput, {nullable:true})
    connectOrCreate?: ScryfallCardCreateOrConnectWithoutCardFacesInput;

    @Field(() => ScryfallCardUpsertWithoutCardFacesInput, {nullable:true})
    upsert?: ScryfallCardUpsertWithoutCardFacesInput;

    @Field(() => ScryfallCardWhereUniqueInput, {nullable:true})
    connect?: ScryfallCardWhereUniqueInput;

    @Field(() => ScryfallCardUpdateWithoutCardFacesInput, {nullable:true})
    update?: ScryfallCardUpdateWithoutCardFacesInput;
}
