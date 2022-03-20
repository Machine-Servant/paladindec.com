import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-firebase-jwt';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(FirebaseAuthStrategy.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly firebaseAuthService: FirebaseAuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('FIREBASE_AUTH_STRATEGY_SECRET'),
    });
  }

  async validate(token: string) {
    try {
      const results = await this.firebaseAuthService.verifyToken(token);
      return results;
    } catch (err) {
      this.logger.error(err);
      throw new UnauthorizedException(err);
    }
  }
}
