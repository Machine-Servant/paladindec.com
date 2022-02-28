import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutRelatedToInput } from './scryfall-card-create-without-related-to.input';
import { ScryfallCardCreateOrConnectWithoutRelatedToInput } from './scryfall-card-create-or-connect-without-related-to.input';
import { ScryfallCardUpsertWithoutRelatedToInput } from './scryfall-card-upsert-without-related-to.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithoutRelatedToInput } from './scryfall-card-update-without-related-to.input';

@InputType()
export class ScryfallCardUpdateOneRequiredWithoutRelatedToInput {
  @Field(() => ScryfallCardCreateWithoutRelatedToInput, { nullable: true })
  create?: ScryfallCardCreateWithoutRelatedToInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutRelatedToInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutRelatedToInput;

  @Field(() => ScryfallCardUpsertWithoutRelatedToInput, { nullable: true })
  upsert?: ScryfallCardUpsertWithoutRelatedToInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardUpdateWithoutRelatedToInput, { nullable: true })
  update?: ScryfallCardUpdateWithoutRelatedToInput;
}
