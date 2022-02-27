import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardUpdateWithoutReferencedByInput } from './card-update-without-referenced-by.input';
import { CardCreateWithoutReferencedByInput } from './card-create-without-referenced-by.input';

@InputType()
export class CardUpsertWithoutReferencedByInput {
  @Field(() => CardUpdateWithoutReferencedByInput, { nullable: false })
  update!: CardUpdateWithoutReferencedByInput;

  @Field(() => CardCreateWithoutReferencedByInput, { nullable: false })
  create!: CardCreateWithoutReferencedByInput;
}
