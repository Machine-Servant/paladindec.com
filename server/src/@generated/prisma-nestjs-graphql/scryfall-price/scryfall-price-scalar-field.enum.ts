import { registerEnumType } from '@nestjs/graphql';

export enum ScryfallPriceScalarFieldEnum {
  id = 'id',
  date = 'date',
  eur = 'eur',
  tix = 'tix',
  usd = 'usd',
  eurFoil = 'eurFoil',
  usdFoil = 'usdFoil',
  usdEtched = 'usdEtched',
  cardId = 'cardId',
  currentPriceOfCardId = 'currentPriceOfCardId',
}

registerEnumType(ScryfallPriceScalarFieldEnum, {
  name: 'ScryfallPriceScalarFieldEnum',
  description: undefined,
});
