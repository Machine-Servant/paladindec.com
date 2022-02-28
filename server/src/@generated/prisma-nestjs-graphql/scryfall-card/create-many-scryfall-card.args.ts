import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardCreateManyInput } from './scryfall-card-create-many.input';

@ArgsType()
export class CreateManyScryfallCardArgs {
  @Field(() => [ScryfallCardCreateManyInput], { nullable: false })
  data!: Array<ScryfallCardCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
