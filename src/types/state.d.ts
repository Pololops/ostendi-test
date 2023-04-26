// import { ACTION_TYPES } from "../reducer/tabsReducer";

type TabType = {
  id: string;
  label: string;
  isActive?: boolean;
  children?: TabType[];
};