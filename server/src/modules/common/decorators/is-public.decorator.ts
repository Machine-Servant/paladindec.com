import { applyDecorators, SetMetadata } from '@nestjs/common';

export function IsPublic() {
  return applyDecorators(SetMetadata('isPublic', true));
}
