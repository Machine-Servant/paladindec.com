import { User } from 'firebase/auth';
import nookies from 'nookies';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../app/firebase.app';
import { useLogger } from '../../hooks/useLogger';
import { Logger } from '../../utils/logger';

type AuthContextType = {
  user?: User | null;
  loading: boolean;
  error?: Error;
};

export const TOKEN_COOKIE_NAME = 'paladindeck_token';

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthContextProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const logger = useLogger(AuthContextProvider.name);
  const [user, loading, error] = useAuthState(auth);

  const handleAuthStateChanged = useCallback(async (authState: unknown) => {
    console.log(TOKEN_COOKIE_NAME);
    if (!authState) {
      nookies.set(undefined, TOKEN_COOKIE_NAME, '', { path: '/' });
      return auth.signOut();
    }
  }, []);

  const handleIdTokenChanged = useCallback(async (fbUser?: User | null) => {
    if (!fbUser) return;

    const token = await fbUser.getIdToken();

    nookies.set(undefined, TOKEN_COOKIE_NAME, token, { path: '/' });
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);
    return () => unsubscribe();
  }, [handleAuthStateChanged]);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleIdTokenChanged);
    return () => unsubscribe();
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
