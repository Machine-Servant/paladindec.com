export enum SidebarAction {
  SetSidebarOpen = 'SET_SIDEBAR_OPEN',
}

export type SidebarActionType = {
  type: SidebarAction.SetSidebarOpen;
  payload: boolean;
};
