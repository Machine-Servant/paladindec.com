import React, { useCallback, useEffect, useReducer } from 'react';
import { SidebarAction } from './SidebarContent.actions';
import { initialState, sidebarReducer } from './SidebarContext.reducer';

type SidebarContextType = {
  isOpen: boolean;
  setSidebarIsOpen: (isOpen: boolean) => void;
};

const SIDEBAR_IS_OPEN_KEY = 'paladindeck:sidebar:isopen';

const SidebarContext = React.createContext<SidebarContextType | undefined>(
  undefined,
);

export const SidebarProvider: React.FC<React.PropsWithChildren<unknown>> = (
  props,
) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);

  const setSidebarIsOpen = useCallback((isOpen: boolean) => {
    dispatch({ type: SidebarAction.SetSidebarOpen, payload: isOpen });
  }, []);

  useEffect(() => {
    const storedSidebarIsOpen = localStorage.getItem(SIDEBAR_IS_OPEN_KEY);
    if (storedSidebarIsOpen) {
      setSidebarIsOpen(storedSidebarIsOpen === 'true');
    }
  }, [setSidebarIsOpen]);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_IS_OPEN_KEY, `${state.isOpen}`);
  }, [state.isOpen]);

  return (
    <SidebarContext.Provider
      value={{
        setSidebarIsOpen,
        ...state,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const contextValue = React.useContext(SidebarContext);
  if (contextValue === undefined) {
    throw new Error(
      'You may only use the useSidebar hook from inside a SidebarProvider',
    );
  }
  return contextValue;
};
