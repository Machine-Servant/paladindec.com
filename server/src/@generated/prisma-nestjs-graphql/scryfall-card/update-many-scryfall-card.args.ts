import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardUpdateManyMutationInput } from './scryfall-card-update-many-mutation.input';
import { ScryfallCardWhereInput } from './scryfall-card-where.input';

@ArgsType()
export class UpdateManyScryfallCardArgs {
  @Field(() => ScryfallCardUpdateManyMutationInput, { nullable: false })
  data!: ScryfallCardUpdateManyMutationInput;

  @Field(() => ScryfallCardWhereInput, { nullable: true })
  where?: ScryfallCardWhereInput;
}
