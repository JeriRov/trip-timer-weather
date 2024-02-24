export type SidebarProps = {
  isActive: boolean;
  toggleSidebar: () => void;
  isLoading?: boolean;
};

export type CountdownType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  started: boolean;
};
