import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class CurrentUserGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const paladinDeckContext = ctx.getContext().paladinDeck;
    const firebaseUser = ctx.getContext().req.user;

    const user = this.userService.findUnique({
      externalAuthId: firebaseUser.sub,
    });

    ctx.getContext().paladinDeck = {
      ...paladinDeckContext,
      user,
    };

    return true;
  }
}

/*
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from '../../user/services/user.service';

export const BYPASS_METADATA_KEY = 'bypassCurrentUser';

@Injectable()
export class CurrentUserGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext) {
    const bypass = this.reflector.get<boolean>(
      BYPASS_METADATA_KEY,
      context.getHandler()
    );
    if (bypass) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);

    const user = await this.userService.findByExternalAuthId(
      ctx.getContext().req.user.sub
    );

    if (!user) {
      return false;
    }

    const homevaultContext = ctx.getContext().homevault || {};
    ctx.getContext().homevault = { ...homevaultContext, user };

    return true;
  }
}
*/
