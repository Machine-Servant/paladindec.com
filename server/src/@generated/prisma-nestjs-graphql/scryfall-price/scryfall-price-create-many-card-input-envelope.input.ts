import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScryfallPriceCreateManyCardInput } from './scryfall-price-create-many-card.input';

@InputType()
export class ScryfallPriceCreateManyCardInputEnvelope {
  @Field(() => [ScryfallPriceCreateManyCardInput], { nullable: false })
  data!: Array<ScryfallPriceCreateManyCardInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
