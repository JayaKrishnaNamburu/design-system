export interface Tabprops {
  change: (selectedTab: TabMenuItem) => void;
  menuItems: TabMenuItem[];
}

export interface TabMenuItem {
  id?: number;
  value: string;
}

export interface SelectProps {
  options: OptionConfig[];
  change: (value: OptionConfig) => void;
  selected?: string | number;
  placeholder?: string;
  isSearchable?: boolean;
  customProps?: any;
}

export interface OptionConfig {
  value: string | number;
  label: string;
  isFixed?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  isFocused?: boolean;
}

export interface ButtonProps {
  size?: "small" | "regular";
  aria?: string;
  flatButton?: boolean;
  disabled?: boolean;
}

export interface CardProps {
  heading?: string;
  boxShadow?: string;
  flatCard?: boolean;
  align?: string;
}

export interface ExpandableCardProps {
  heading?: string;
  flatCard?: boolean;
}

export interface ProgressBarProps {
  label: string;
  progress: number;
  size?: "small" | "regular";
  height?: string;
  animate?: boolean;
}

export interface ToggleProps {
  callback: (status: boolean) => void;
  checked?: boolean;
}
