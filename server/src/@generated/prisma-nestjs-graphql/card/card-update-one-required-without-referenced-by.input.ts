import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardCreateWithoutReferencedByInput } from './card-create-without-referenced-by.input';
import { CardCreateOrConnectWithoutReferencedByInput } from './card-create-or-connect-without-referenced-by.input';
import { CardUpsertWithoutReferencedByInput } from './card-upsert-without-referenced-by.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { CardUpdateWithoutReferencedByInput } from './card-update-without-referenced-by.input';

@InputType()
export class CardUpdateOneRequiredWithoutReferencedByInput {
  @Field(() => CardCreateWithoutReferencedByInput, { nullable: true })
  create?: CardCreateWithoutReferencedByInput;

  @Field(() => CardCreateOrConnectWithoutReferencedByInput, { nullable: true })
  connectOrCreate?: CardCreateOrConnectWithoutReferencedByInput;

  @Field(() => CardUpsertWithoutReferencedByInput, { nullable: true })
  upsert?: CardUpsertWithoutReferencedByInput;

  @Field(() => CardWhereUniqueInput, { nullable: true })
  connect?: CardWhereUniqueInput;

  @Field(() => CardUpdateWithoutReferencedByInput, { nullable: true })
  update?: CardUpdateWithoutReferencedByInput;
}
