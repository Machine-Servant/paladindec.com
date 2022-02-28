import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetCreateManyInput } from './scryfall-set-create-many.input';

@ArgsType()
export class CreateManyScryfallSetArgs {
  @Field(() => [ScryfallSetCreateManyInput], { nullable: false })
  data!: Array<ScryfallSetCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
