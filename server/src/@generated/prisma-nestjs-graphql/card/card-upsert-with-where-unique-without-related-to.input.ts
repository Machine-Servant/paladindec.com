import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutRelatedToInput } from './card-update-without-related-to.input';
import { CardCreateWithoutRelatedToInput } from './card-create-without-related-to.input';

@InputType()
export class CardUpsertWithWhereUniqueWithoutRelatedToInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  where!: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutRelatedToInput, { nullable: false })
  update!: CardUpdateWithoutRelatedToInput;

  @Field(() => CardCreateWithoutRelatedToInput, { nullable: false })
  create!: CardCreateWithoutRelatedToInput;
}
