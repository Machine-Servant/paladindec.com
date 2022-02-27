import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThingWhereInput } from './thing-where.input';

@ArgsType()
export class DeleteManyThingArgs {
  @Field(() => ThingWhereInput, { nullable: true })
  where?: ThingWhereInput;
}
