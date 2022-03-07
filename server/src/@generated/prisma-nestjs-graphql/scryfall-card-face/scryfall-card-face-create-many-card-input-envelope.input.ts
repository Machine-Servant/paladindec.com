import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceCreateManyCardInput } from './scryfall-card-face-create-many-card.input';

@InputType()
export class ScryfallCardFaceCreateManyCardInputEnvelope {
  @Field(() => [ScryfallCardFaceCreateManyCardInput], { nullable: false })
  data!: Array<ScryfallCardFaceCreateManyCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
