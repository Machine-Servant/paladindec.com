import { FirebaseAuthStrategy } from './firebase-auth.strategy';

describe('FirebaseAuthStategy', () => {
  it('should be defined', () => {
    expect(new FirebaseAuthStrategy()).toBeDefined();
  });
});
