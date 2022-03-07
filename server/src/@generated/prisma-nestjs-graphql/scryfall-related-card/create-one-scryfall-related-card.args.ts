import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallRelatedCardCreateInput } from './scryfall-related-card-create.input';

@ArgsType()
export class CreateOneScryfallRelatedCardArgs {
  @Field(() => ScryfallRelatedCardCreateInput, { nullable: false })
  data!: ScryfallRelatedCardCreateInput;
}
