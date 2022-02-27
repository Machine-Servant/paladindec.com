import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SetCreateManyInput } from './set-create-many.input';

@ArgsType()
export class CreateManySetArgs {
  @Field(() => [SetCreateManyInput], { nullable: false })
  data!: Array<SetCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
