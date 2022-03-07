import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutReferencedByInput } from './scryfall-card-create-without-referenced-by.input';
import { ScryfallCardCreateOrConnectWithoutReferencedByInput } from './scryfall-card-create-or-connect-without-referenced-by.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@InputType()
export class ScryfallCardCreateNestedOneWithoutReferencedByInput {
  @Field(() => ScryfallCardCreateWithoutReferencedByInput, { nullable: true })
  create?: ScryfallCardCreateWithoutReferencedByInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutReferencedByInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutReferencedByInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;
}
