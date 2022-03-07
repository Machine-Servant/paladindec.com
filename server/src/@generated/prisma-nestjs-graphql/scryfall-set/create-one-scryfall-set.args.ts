import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetCreateInput } from './scryfall-set-create.input';

@ArgsType()
export class CreateOneScryfallSetArgs {
  @Field(() => ScryfallSetCreateInput, { nullable: false })
  data!: ScryfallSetCreateInput;
}
