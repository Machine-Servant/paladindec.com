import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RelatedCardWhereInput } from './related-card-where.input';

@ArgsType()
export class DeleteManyRelatedCardArgs {
  @Field(() => RelatedCardWhereInput, { nullable: true })
  where?: RelatedCardWhereInput;
}
