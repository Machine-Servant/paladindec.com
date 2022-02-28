import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallSetUpdateManyMutationInput } from './scryfall-set-update-many-mutation.input';
import { ScryfallSetWhereInput } from './scryfall-set-where.input';

@ArgsType()
export class UpdateManyScryfallSetArgs {
  @Field(() => ScryfallSetUpdateManyMutationInput, { nullable: false })
  data!: ScryfallSetUpdateManyMutationInput;

  @Field(() => ScryfallSetWhereInput, { nullable: true })
  where?: ScryfallSetWhereInput;
}
