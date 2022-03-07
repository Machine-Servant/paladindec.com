import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutRelatedToInput } from './scryfall-card-create-without-related-to.input';
import { ScryfallCardCreateOrConnectWithoutRelatedToInput } from './scryfall-card-create-or-connect-without-related-to.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@InputType()
export class ScryfallCardCreateNestedOneWithoutRelatedToInput {
  @Field(() => ScryfallCardCreateWithoutRelatedToInput, { nullable: true })
  create?: ScryfallCardCreateWithoutRelatedToInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutRelatedToInput, {
    nullable: true,
  })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutRelatedToInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;
}
