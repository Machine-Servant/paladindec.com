import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateWithoutCollectionsInput } from './scryfall-card-create-without-collections.input';

@InputType()
export class ScryfallCardCreateOrConnectWithoutCollectionsInput {
  @Field(() => ScryfallCardWhereUniqueInput, { nullable: false })
  where!: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardCreateWithoutCollectionsInput, { nullable: false })
  create!: ScryfallCardCreateWithoutCollectionsInput;
}
