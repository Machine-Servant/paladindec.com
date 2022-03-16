import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useCallback, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../app/firebase.app';

type AuthContextType = {
  user?: User | null;
  loading: boolean;
  error?: Error;
};

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthContextProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const handleAuthStateChanged = useCallback(async (authState: unknown) => {
    if (!authState) {
      return auth.signOut();
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
    return () => unsubscribe();
  }, [handleAuthStateChanged]);

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
