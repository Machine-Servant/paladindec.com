import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallCardWhereUniqueInput } from './scryfall-card-where-unique.input';
import { ScryfallCardCreateWithoutCardInput } from './scryfall-card-create-without-card.input';

@InputType()
export class ScryfallCardCreateOrConnectWithoutCardInput {
  @Field(() => ScryfallCardWhereUniqueInput, { nullable: false })
  where!: ScryfallCardWhereUniqueInput;

  @Field(() => ScryfallCardCreateWithoutCardInput, { nullable: false })
  create!: ScryfallCardCreateWithoutCardInput;
}
