import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceScalarWhereInput } from './scryfall-card-face-scalar-where.input';
import { ScryfallCardFaceUpdateManyMutationInput } from './scryfall-card-face-update-many-mutation.input';

@InputType()
export class ScryfallCardFaceUpdateManyWithWhereWithoutCardInput {
  @Field(() => ScryfallCardFaceScalarWhereInput, { nullable: false })
  where!: ScryfallCardFaceScalarWhereInput;

  @Field(() => ScryfallCardFaceUpdateManyMutationInput, { nullable: false })
  data!: ScryfallCardFaceUpdateManyMutationInput;
}
