import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutCardFacesInput } from './scryfall-card-create-without-card-faces.input';
import { ScryfallCardCreateOrConnectWithoutCardFacesInput } from './scryfall-card-create-or-connect-without-card-faces.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@InputType()
export class ScryfallCardCreateNestedOneWithoutCardFacesInput {
  @Field(() => ScryfallCardCreateWithoutCardFacesInput, { nullable: true })
  create?: ScryfallCardCreateWithoutCardFacesInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutCardFacesInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutCardFacesInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;
}
