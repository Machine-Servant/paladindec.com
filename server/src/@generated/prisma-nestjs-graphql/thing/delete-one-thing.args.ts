import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingWhereUniqueInput } from './thing-where-unique.input';

@ArgsType()
export class DeleteOneThingArgs {
  @Field(() => ThingWhereUniqueInput, { nullable: false })
  where!: ThingWhereUniqueInput;
}
