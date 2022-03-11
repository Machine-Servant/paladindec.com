import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from '../../user/services/user.service';

export const BYPASS_METADATA_KEY = 'BYPASS_CURRENT_USER';

@Injectable()
export class CurrentUserGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const bypass = this.reflector.get<string>(
      BYPASS_METADATA_KEY,
      context.getHandler(),
    );

    if (bypass) return true;

    const ctx = GqlExecutionContext.create(context);

    const paladinDeckContext = ctx.getContext().paladinDeck;
    const firebaseUser = ctx.getContext().req.user;

    const user = this.userService.findUnique({
      externalAuthId: firebaseUser.uid,
    });

    ctx.getContext().paladinDeck = {
      ...paladinDeckContext,
      user,
    };

    return true;
  }
}
