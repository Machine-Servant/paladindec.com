import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereInput } from './scryfall-card-face-where.input';

@ArgsType()
export class DeleteManyScryfallCardFaceArgs {
  @Field(() => ScryfallCardFaceWhereInput, { nullable: true })
  where?: ScryfallCardFaceWhereInput;
}
