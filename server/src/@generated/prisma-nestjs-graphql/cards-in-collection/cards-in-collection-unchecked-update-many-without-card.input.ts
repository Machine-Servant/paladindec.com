import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CardsInCollectionCreateWithoutCardInput } from './cards-in-collection-create-without-card.input';
import { CardsInCollectionCreateOrConnectWithoutCardInput } from './cards-in-collection-create-or-connect-without-card.input';
import { CardsInCollectionUpsertWithWhereUniqueWithoutCardInput } from './cards-in-collection-upsert-with-where-unique-without-card.input';
import { CardsInCollectionCreateManyCardInputEnvelope } from './cards-in-collection-create-many-card-input-envelope.input';
import { CardsInCollectionWhereUniqueInput } from './cards-in-collection-where-unique.input';
import { CardsInCollectionUpdateWithWhereUniqueWithoutCardInput } from './cards-in-collection-update-with-where-unique-without-card.input';
import { CardsInCollectionUpdateManyWithWhereWithoutCardInput } from './cards-in-collection-update-many-with-where-without-card.input';
import { CardsInCollectionScalarWhereInput } from './cards-in-collection-scalar-where.input';

@InputType()
export class CardsInCollectionUncheckedUpdateManyWithoutCardInput {
  @Field(() => [CardsInCollectionCreateWithoutCardInput], { nullable: true })
  create?: Array<CardsInCollectionCreateWithoutCardInput>;

  @Field(() => [CardsInCollectionCreateOrConnectWithoutCardInput], {
    nullable: true,
  })
  connectOrCreate?: Array<CardsInCollectionCreateOrConnectWithoutCardInput>;

  @Field(() => [CardsInCollectionUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  upsert?: Array<CardsInCollectionUpsertWithWhereUniqueWithoutCardInput>;

  @Field(() => CardsInCollectionCreateManyCardInputEnvelope, { nullable: true })
  createMany?: CardsInCollectionCreateManyCardInputEnvelope;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  set?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  disconnect?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  delete?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionWhereUniqueInput], { nullable: true })
  connect?: Array<CardsInCollectionWhereUniqueInput>;

  @Field(() => [CardsInCollectionUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  update?: Array<CardsInCollectionUpdateWithWhereUniqueWithoutCardInput>;

  @Field(() => [CardsInCollectionUpdateManyWithWhereWithoutCardInput], {
    nullable: true,
  })
  updateMany?: Array<CardsInCollectionUpdateManyWithWhereWithoutCardInput>;

  @Field(() => [CardsInCollectionScalarWhereInput], { nullable: true })
  deleteMany?: Array<CardsInCollectionScalarWhereInput>;
}
