import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceCreateInput } from './scryfall-card-face-create.input';

@ArgsType()
export class CreateOneScryfallCardFaceArgs {
  @Field(() => ScryfallCardFaceCreateInput, { nullable: false })
  data!: ScryfallCardFaceCreateInput;
}
