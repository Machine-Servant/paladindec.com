import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceUpdateManyMutationInput } from './scryfall-card-face-update-many-mutation.input';
import { ScryfallCardFaceWhereInput } from './scryfall-card-face-where.input';

@ArgsType()
export class UpdateManyScryfallCardFaceArgs {

    @Field(() => ScryfallCardFaceUpdateManyMutationInput, {nullable:false})
    data!: ScryfallCardFaceUpdateManyMutationInput;

    @Field(() => ScryfallCardFaceWhereInput, {nullable:true})
    where?: ScryfallCardFaceWhereInput;
}
