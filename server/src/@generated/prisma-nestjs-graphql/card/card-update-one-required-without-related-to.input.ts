import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutRelatedToInput } from './card-create-without-related-to.input';
import { CardCreateOrConnectWithoutRelatedToInput } from './card-create-or-connect-without-related-to.input';
import { CardUpsertWithoutRelatedToInput } from './card-upsert-without-related-to.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutRelatedToInput } from './card-update-without-related-to.input';

@InputType()
export class CardUpdateOneRequiredWithoutRelatedToInput {
  @Field(() => CardCreateWithoutRelatedToInput, { nullable: true })
  create?: CardCreateWithoutRelatedToInput;

  @Field(() => CardCreateOrConnectWithoutRelatedToInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutRelatedToInput;

  @Field(() => CardUpsertWithoutRelatedToInput, { nullable: true })
  upsert?: CardUpsertWithoutRelatedToInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutRelatedToInput, { nullable: true })
  update?: CardUpdateWithoutRelatedToInput;
}
