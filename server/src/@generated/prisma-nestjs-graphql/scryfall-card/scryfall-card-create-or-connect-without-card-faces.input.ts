import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateWithoutCardFacesInput } from './scryfall-card-create-without-card-faces.input';

@InputType()
export class ScryfallCardCreateOrConnectWithoutCardFacesInput {
  @Field(() => ScryfallCardWhereUniqueInput, { nullable: false })
  where!: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardCreateWithoutCardFacesInput, { nullable: false })
  create!: ScryfallCardCreateWithoutCardFacesInput;
}
