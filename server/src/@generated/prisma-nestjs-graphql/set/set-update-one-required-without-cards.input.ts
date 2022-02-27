import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SetCreateWithoutCardsInput } from './set-create-without-cards.input';
import { SetCreateOrConnectWithoutCardsInput } from './set-create-or-connect-without-cards.input';
import { SetUpsertWithoutCardsInput } from './set-upsert-without-cards.input';
import { SetWhereUniqueInput } from './set-where-unique.input';
import { SetUpdateWithoutCardsInput } from './set-update-without-cards.input';

@InputType()
export class SetUpdateOneRequiredWithoutCardsInput {
  @Field(() => SetCreateWithoutCardsInput, { nullable: true })
  create?: SetCreateWithoutCardsInput;

  @Field(() => SetCreateOrConnectWithoutCardsInput, { nullable: true })
  connectOrCreate?: SetCreateOrConnectWithoutCardsInput;

  @Field(() => SetUpsertWithoutCardsInput, { nullable: true })
  upsert?: SetUpsertWithoutCardsInput;

  @Field(() => SetWhereUniqueInput, { nullable: true })
  connect?: SetWhereUniqueInput;

  @Field(() => SetUpdateWithoutCardsInput, { nullable: true })
  update?: SetUpdateWithoutCardsInput;
}
