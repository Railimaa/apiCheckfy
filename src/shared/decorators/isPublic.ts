import { SetMetadata } from '@nestjs/common';

export function isPublic() {
  return SetMetadata('IS_PUBLIC', true);
}
