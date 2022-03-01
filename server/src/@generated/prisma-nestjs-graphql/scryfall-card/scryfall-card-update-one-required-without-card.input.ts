import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutCardInput } from './scryfall-card-create-without-card.input';
import { ScryfallCardCreateOrConnectWithoutCardInput } from './scryfall-card-create-or-connect-without-card.input';
import { ScryfallCardUpsertWithoutCardInput } from './scryfall-card-upsert-without-card.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithoutCardInput } from './scryfall-card-update-without-card.input';

@InputType()
export class ScryfallCardUpdateOneRequiredWithoutCardInput {
  @Field(() => ScryfallCardCreateWithoutCardInput, { nullable: true })
  create?: ScryfallCardCreateWithoutCardInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutCardInput, { nullable: true })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutCardInput;

  @Field(() => ScryfallCardUpsertWithoutCardInput, { nullable: true })
  upsert?: ScryfallCardUpsertWithoutCardInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardUpdateWithoutCardInput, { nullable: true })
  update?: ScryfallCardUpdateWithoutCardInput;
}
