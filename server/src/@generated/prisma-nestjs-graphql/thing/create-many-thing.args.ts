import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingCreateManyInput } from './thing-create-many.input';

@ArgsType()
export class CreateManyThingArgs {
  @Field(() => [ThingCreateManyInput], { nullable: false })
  data!: Array<ThingCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
