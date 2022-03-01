import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardCreateWithoutCardInput } from './scryfall-card-create-without-card.input';
import { ScryfallCardCreateOrConnectWithoutCardInput } from './scryfall-card-create-or-connect-without-card.input';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';

@InputType()
export class ScryfallCardCreateNestedOneWithoutCardInput {
  @Field(() => ScryfallCardCreateWithoutCardInput, { nullable: true })
  create?: ScryfallCardCreateWithoutCardInput;

  @Field(() => ScryfallCardCreateOrConnectWithoutCardInput, { nullable: true })
  connectOrCreate?: ScryfallCardCreateOrConnectWithoutCardInput;

  @Field(() => ScryfallCardWhereUniqueInput, { nullable: true })
  connect?: ScryfallCardWhereUniqueInput;
}
