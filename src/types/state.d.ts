// import { ACTION_TYPES } from "../reducer/tabsReducer";

type LinkSign = {
  id: string;
  label: string;
  path: string;
  key: number;
};

type State = LinkSign[] | [];

type MemoryState = {
  backState: State;
  forwardState: State;
};