import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetUpdateManyMutationInput } from './set-update-many-mutation.input';
import { SetWhereInput } from './set-where.input';

@ArgsType()
export class UpdateManySetArgs {
  @Field(() => SetUpdateManyMutationInput, { nullable: false })
  data!: SetUpdateManyMutationInput;

  @Field(() => SetWhereInput, { nullable: true })
  where?: SetWhereInput;
}
