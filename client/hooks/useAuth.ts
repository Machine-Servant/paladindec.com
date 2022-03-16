import { useContext } from 'react';
import { AuthContext } from '../contexts/auth-context';

export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (contextValue === undefined) {
    throw new Error(
      'You may only use the useAuth hook from inside a AuthContextProvider',
    );
  }
  return contextValue;
};
