import { applyDecorators, SetMetadata } from '@nestjs/common';
import { BYPASS_METADATA_KEY } from '../guards/current-user.guard';

export function BypassCurrentUser() {
  return applyDecorators(SetMetadata(BYPASS_METADATA_KEY, true));
}
