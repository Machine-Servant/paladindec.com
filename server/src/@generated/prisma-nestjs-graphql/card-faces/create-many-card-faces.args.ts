import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardFacesCreateManyInput } from './card-faces-create-many.input';

@ArgsType()
export class CreateManyCardFacesArgs {
  @Field(() => [CardFacesCreateManyInput], { nullable: false })
  data!: Array<CardFacesCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
