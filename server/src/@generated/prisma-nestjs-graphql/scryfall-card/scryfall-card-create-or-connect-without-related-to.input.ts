import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateWithoutRelatedToInput } from './scryfall-card-create-without-related-to.input';

@InputType()
export class ScryfallCardCreateOrConnectWithoutRelatedToInput {
  @Field(() => ScryfallCardWhereUniqueInput, { nullable: false })
  where!: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardCreateWithoutRelatedToInput, { nullable: false })
  create!: ScryfallCardCreateWithoutRelatedToInput;
}
