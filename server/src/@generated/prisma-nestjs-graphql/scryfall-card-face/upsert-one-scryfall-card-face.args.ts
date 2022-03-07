import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';
import { ScryfallCardFaceCreateInput } from './scryfall-card-face-create.input';
import { ScryfallCardFaceUpdateInput } from './scryfall-card-face-update.input';

@ArgsType()
export class UpsertOneScryfallCardFaceArgs {
  @Field(() => ScryfallCardFaceWhereUniqueInput, { nullable: false })
  where!: ScryfallCardFaceWhereUniqueInput;

  @Field(() => ScryfallCardFaceCreateInput, { nullable: false })
  create!: ScryfallCardFaceCreateInput;

  @Field(() => ScryfallCardFaceUpdateInput, { nullable: false })
  update!: ScryfallCardFaceUpdateInput;
}
