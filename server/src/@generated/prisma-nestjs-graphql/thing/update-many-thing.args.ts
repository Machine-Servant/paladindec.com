import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingUncheckedUpdateManyInput } from './thing-unchecked-update-many.input';
import { ThingWhereInput } from './thing-where.input';

@ArgsType()
export class UpdateManyThingArgs {
  @Field(() => ThingUncheckedUpdateManyInput, { nullable: false })
  data!: ThingUncheckedUpdateManyInput;

  @Field(() => ThingWhereInput, { nullable: true })
  where?: ThingWhereInput;
}
