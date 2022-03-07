import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetWhereInput } from './scryfall-set-where.input';

@ArgsType()
export class DeleteManyScryfallSetArgs {
  @Field(() => ScryfallSetWhereInput, { nullable: true })
  where?: ScryfallSetWhereInput;
}
