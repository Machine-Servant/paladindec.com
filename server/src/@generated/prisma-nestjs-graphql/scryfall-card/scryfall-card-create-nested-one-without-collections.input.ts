import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutCollectionsInput } from './scryfall-card-create-without-collections.input';
import { ScryfallCardCreateOrConnectWithoutCollectionsInput } from './scryfall-card-create-or-connect-without-collections.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@InputType()
export class ScryfallCardCreateNestedOneWithoutCollectionsInput {
  @Field(() => ScryfallCardCreateWithoutCollectionsInput, { nullable: true })
  create?: ScryfallCardCreateWithoutCollectionsInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutCollectionsInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutCollectionsInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;
}
