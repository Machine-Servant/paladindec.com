import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionCreateInput } from './collection-create.input';

@ArgsType()
export class CreateOneCollectionArgs {
  @Field(() => CollectionCreateInput, { nullable: false })
  data!: CollectionCreateInput;
}
