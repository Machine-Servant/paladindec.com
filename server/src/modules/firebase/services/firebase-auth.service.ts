import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

@Injectable()
export class FirebaseAuthService {
  constructor(private readonly app: firebase.app.App) {}

  async verifyToken(token: string): Promise<DecodedIdToken> {
    return this.app.auth().verifyIdToken(token);
  }
}
