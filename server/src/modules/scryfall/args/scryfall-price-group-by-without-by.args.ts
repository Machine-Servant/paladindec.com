import { ArgsType, OmitType } from '@nestjs/graphql';
import { ScryfallPriceGroupByArgs } from '../../../@generated/prisma-nestjs-graphql/scryfall-price/scryfall-price-group-by.args';

@ArgsType()
export class ScryfallPriceGroupByWithoutByArgs extends OmitType(
  ScryfallPriceGroupByArgs,
  ['by'] as const,
  ArgsType,
) {}
