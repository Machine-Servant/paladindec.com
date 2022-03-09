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
