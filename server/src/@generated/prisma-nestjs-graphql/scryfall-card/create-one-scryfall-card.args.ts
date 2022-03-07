import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardCreateInput } from './scryfall-card-create.input';

@ArgsType()
export class CreateOneScryfallCardArgs {
  @Field(() => ScryfallCardCreateInput, { nullable: false })
  data!: ScryfallCardCreateInput;
}
