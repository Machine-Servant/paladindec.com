import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutReferencedByInput } from './scryfall-card-create-without-referenced-by.input';
import { ScryfallCardCreateOrConnectWithoutReferencedByInput } from './scryfall-card-create-or-connect-without-referenced-by.input';
import { ScryfallCardUpsertWithoutReferencedByInput } from './scryfall-card-upsert-without-referenced-by.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardUpdateWithoutReferencedByInput } from './scryfall-card-update-without-referenced-by.input';

@InputType()
export class ScryfallCardUpdateOneRequiredWithoutReferencedByInput {
  @Field(() => ScryfallCardCreateWithoutReferencedByInput, { nullable: true })
  create?: ScryfallCardCreateWithoutReferencedByInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutReferencedByInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutReferencedByInput;

  @Field(() => ScryfallCardUpsertWithoutReferencedByInput, { nullable: true })
  upsert?: ScryfallCardUpsertWithoutReferencedByInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardUpdateWithoutReferencedByInput, { nullable: true })
  update?: ScryfallCardUpdateWithoutReferencedByInput;
}
