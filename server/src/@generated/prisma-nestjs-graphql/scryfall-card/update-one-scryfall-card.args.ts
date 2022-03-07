import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardUpdateInput } from './scryfall-card-update.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@ArgsType()
export class UpdateOneScryfallCardArgs {
  @Field(() => ScryfallCardUpdateInput, { nullable: false })
  data!: ScryfallCardUpdateInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: false })
  where!: ScryfallCardWhereUniqueInput;
}
