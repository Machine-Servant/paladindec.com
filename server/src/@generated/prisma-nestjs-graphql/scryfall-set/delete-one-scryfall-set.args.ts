import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetWhereUniqueInput } from './scryfall-set-where-unique.input';

@ArgsType()
export class DeleteOneScryfallSetArgs {
  @Field(() => ScryfallSetWhereUniqueInput, { nullable: false })
  where!: ScryfallSetWhereUniqueInput;
}
