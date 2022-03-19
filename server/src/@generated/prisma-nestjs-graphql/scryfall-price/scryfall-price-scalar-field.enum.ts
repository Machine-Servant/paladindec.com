import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallPriceScalarFieldEnum {
  date = 'date',
  eur = 'eur',
  tix = 'tix',
  usd = 'usd',
  eurFoil = 'eurFoil',
  usdFoil = 'usdFoil',
  usdEtched = 'usdEtched',
  cardId = 'cardId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  id = 'id',
  currentPriceOfCardId = 'currentPriceOfCardId',
}

registerEnumType(ScryfallPriceScalarFieldEnum, {
  name: 'ScryfallPriceScalarFieldEnum',
  description: undefined,
});
