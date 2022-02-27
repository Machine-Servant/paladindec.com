import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingWhereUniqueInput } from './thing-where-unique.input';
import { ThingUncheckedCreateInput } from './thing-unchecked-create.input';
import { ThingUncheckedUpdateInput } from './thing-unchecked-update.input';

@ArgsType()
export class UpsertOneThingArgs {
  @Field(() => ThingWhereUniqueInput, { nullable: false })
  where!: ThingWhereUniqueInput;

  @Field(() => ThingUncheckedCreateInput, { nullable: false })
  create!: ThingUncheckedCreateInput;

  @Field(() => ThingUncheckedUpdateInput, { nullable: false })
  update!: ThingUncheckedUpdateInput;
}
