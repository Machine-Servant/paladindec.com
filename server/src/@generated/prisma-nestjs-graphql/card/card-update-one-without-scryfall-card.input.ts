import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutScryfallCardInput } from './card-create-without-scryfall-card.input';
import { CardCreateOrConnectWithoutScryfallCardInput } from './card-create-or-connect-without-scryfall-card.input';
import { CardUpsertWithoutScryfallCardInput } from './card-upsert-without-scryfall-card.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutScryfallCardInput } from './card-update-without-scryfall-card.input';

@InputType()
export class CardUpdateOneWithoutScryfallCardInput {
  @Field(() => CardCreateWithoutScryfallCardInput, { nullable: true })
  create?: CardCreateWithoutScryfallCardInput;

  @Field(() => CardCreateOrConnectWithoutScryfallCardInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutScryfallCardInput;

  @Field(() => CardUpsertWithoutScryfallCardInput, { nullable: true })
  upsert?: CardUpsertWithoutScryfallCardInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutScryfallCardInput, { nullable: true })
  update?: CardUpdateWithoutScryfallCardInput;
}
