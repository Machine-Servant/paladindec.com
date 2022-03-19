import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ScryfallCardCreateNestedOneWithoutRelatedToInput } from '../scryfall-card/scryfall-card-create-nested-one-without-related-to.input';
import { ScryfallCardCreateNestedOneWithoutReferencedByInput } from '../scryfall-card/scryfall-card-create-nested-one-without-referenced-by.input';

@InputType()
export class ScryfallRelatedCardCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  component!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  typeLine!: string;

  @Field(() => String, { nullable: false })
  uri!: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => ScryfallCardCreateNestedOneWithoutRelatedToInput, {
    nullable: false,
  })
  card!: ScryfallCardCreateNestedOneWithoutRelatedToInput;

  @Field(() => ScryfallCardCreateNestedOneWithoutReferencedByInput, {
    nullable: false,
  })
  reference!: ScryfallCardCreateNestedOneWithoutReferencedByInput;
}
