import { SidebarAction, SidebarActionType } from './SidebarContent.actions';

type SidebarState = {
  isOpen: boolean;
};

export const initialState = { isOpen: true };
export const sidebarReducer = (
  previousState: SidebarState,
  action: SidebarActionType,
) => {
  const { type, payload } = action;

  switch (type) {
    case SidebarAction.SetSidebarOpen: {
      return { ...previousState, isOpen: payload };
    }
    default:
      return previousState;
  }
};
