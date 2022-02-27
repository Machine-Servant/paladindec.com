import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingUncheckedUpdateInput } from './thing-unchecked-update.input';
import { ThingWhereUniqueInput } from './thing-where-unique.input';

@ArgsType()
export class UpdateOneThingArgs {
  @Field(() => ThingUncheckedUpdateInput, { nullable: false })
  data!: ThingUncheckedUpdateInput;

  @Field(() => ThingWhereUniqueInput, { nullable: false })
  where!: ThingWhereUniqueInput;
}
