import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@ArgsType()
export class DeleteOneScryfallCardArgs {
  @Field(() => ScryfallCardWhereUniqueInput, { nullable: false })
  where!: ScryfallCardWhereUniqueInput;
}
