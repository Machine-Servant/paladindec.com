import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../app/firebase.app';

export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const [token, setToken] = useState<string>();

  const handleAuthStateChanged = useCallback(async (authState: unknown) => {
    if (!authState) {
      return auth.signOut();
    }
  }, []);

  const handleIdTokenChanged = useCallback(async () => {
    if (user) {
      setToken(await user.getIdToken());
    }
  }, [user]);

  useEffect(() => {
    handleIdTokenChanged();
  }, [handleIdTokenChanged]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
    return () => unsubscribe();
  }, [handleAuthStateChanged]);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, handleIdTokenChanged);
    return () => unsubscribe();
  }, [handleIdTokenChanged]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('paladindeck:token', token);
    }
  }, [token]);

  return {
    user,
    loading,
    error,
    token,
  };
};
