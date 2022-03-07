import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutSetInput } from './scryfall-card-create-without-set.input';
import { ScryfallCardCreateOrConnectWithoutSetInput } from './scryfall-card-create-or-connect-without-set.input';
import { ScryfallCardCreateManySetInputEnvelope } from './scryfall-card-create-many-set-input-envelope.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@InputType()
export class ScryfallCardCreateNestedManyWithoutSetInput {
  @Field(() => [ScryfallCardCreateWithoutSetInput], { nullable: true })
  create?: Array<ScryfallCardCreateWithoutSetInput>;

  @Field(() => [ScryfallCardCreateOrConnectWithoutSetInput], { nullable: true })
  connectOrCreate?: Array<ScryfallCardCreateOrConnectWithoutSetInput>;

  @Field(() => ScryfallCardCreateManySetInputEnvelope, { nullable: true })
  createMany?: ScryfallCardCreateManySetInputEnvelope;

  @Field(() => [ScryfallCardWhereUniqueInput], { nullable: true })
  connect?: Array<ScryfallCardWhereUniqueInput>;
}
