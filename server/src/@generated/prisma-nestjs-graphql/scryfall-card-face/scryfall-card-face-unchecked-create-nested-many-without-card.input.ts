import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardFaceCreateWithoutCardInput } from './scryfall-card-face-create-without-card.input';
import { ScryfallCardFaceCreateOrConnectWithoutCardInput } from './scryfall-card-face-create-or-connect-without-card.input';
import { ScryfallCardFaceCreateManyCardInputEnvelope } from './scryfall-card-face-create-many-card-input-envelope.input';
import { ScryfallCardFaceWhereUniqueInput } from './scryfall-card-face-where-unique.input';

@InputType()
export class ScryfallCardFaceUncheckedCreateNestedManyWithoutCardInput {
  @Field(() => [ScryfallCardFaceCreateWithoutCardInput], { nullable: true })
  create?: Array<ScryfallCardFaceCreateWithoutCardInput>;

  @Field(() => [ScryfallCardFaceCreateOrConnectWithoutCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<ScryfallCardFaceCreateOrConnectWithoutCardInput>;

  @Field(() => ScryfallCardFaceCreateManyCardInputEnvelope, { nullable: true })
  createMany?: ScryfallCardFaceCreateManyCardInputEnvelope;

  @Field(() => [ScryfallCardFaceWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardFaceWhereUniqueInput>;
}
