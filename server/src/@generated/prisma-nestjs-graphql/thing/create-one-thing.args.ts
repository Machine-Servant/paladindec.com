import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingUncheckedCreateInput } from './thing-unchecked-create.input';

@ArgsType()
export class CreateOneThingArgs {
  @Field(() => ThingUncheckedCreateInput, { nullable: true })
  data?: ThingUncheckedCreateInput;
}
