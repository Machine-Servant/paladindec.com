import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutScryfallCardInput } from './card-create-without-scryfall-card.input';
import { CardCreateOrConnectWithoutScryfallCardInput } from './card-create-or-connect-without-scryfall-card.input';
import { CardWhereUniqueInput } from './card-where-unique.input';

@InputType()
export class CardUncheckedCreateNestedOneWithoutScryfallCardInput {
  @Field(() => CardCreateWithoutScryfallCardInput, { nullable: true })
  create?: CardCreateWithoutScryfallCardInput;

  @Field(() => CardCreateOrConnectWithoutScryfallCardInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutScryfallCardInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;
}
