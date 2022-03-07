import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';
import { ScryfallCardFaceCreateWithoutCardInput } from './scryfall-card-face-create-without-card.input';

@InputType()
export class ScryfallCardFaceCreateOrConnectWithoutCardInput {
  @Field(() => ScryfallCardFaceWhereUniqueInput, { nullable: false })
  where!: ScryfallCardFaceWhereUniqueInput;

  @Field(() => ScryfallCardFaceCreateWithoutCardInput, { nullable: false })
  create!: ScryfallCardFaceCreateWithoutCardInput;
}
