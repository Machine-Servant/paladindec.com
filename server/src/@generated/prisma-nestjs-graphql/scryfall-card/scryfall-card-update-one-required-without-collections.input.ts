import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutCollectionsInput } from './scryfall-card-create-without-collections.input';
import { ScryfallCardCreateOrConnectWithoutCollectionsInput } from './scryfall-card-create-or-connect-without-collections.input';
import { ScryfallCardUpsertWithoutCollectionsInput } from './scryfall-card-upsert-without-collections.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithoutCollectionsInput } from './scryfall-card-update-without-collections.input';

@InputType()
export class ScryfallCardUpdateOneRequiredWithoutCollectionsInput {
  @Field(() => ScryfallCardCreateWithoutCollectionsInput, { nullable: true })
  create?: ScryfallCardCreateWithoutCollectionsInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutCollectionsInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutCollectionsInput;

  @Field(() => ScryfallCardUpsertWithoutCollectionsInput, { nullable: true })
  upsert?: ScryfallCardUpsertWithoutCollectionsInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardUpdateWithoutCollectionsInput, { nullable: true })
  update?: ScryfallCardUpdateWithoutCollectionsInput;
}
