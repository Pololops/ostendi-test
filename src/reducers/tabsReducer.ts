import initialState from '../state/tabState';
import { toggleTabActivation } from '../utils/tabsUtils';

export enum ACTION_TYPES {
  TOGGLE_ACTIVE = 'TOGGLE_ACTIVE',
}

export type TabsReducerAction = {
  type: ACTION_TYPES;
  payload?: { id: string };
}

export default (state = initialState, { type, payload }: TabsReducerAction): TabType[] => {
  switch (type) {
    case ACTION_TYPES.TOGGLE_ACTIVE: {
      const id = payload?.id || 'tab_1';
      const newState = [...state];

      return toggleTabActivation(newState, id);
    }

    default:
      return state;
  }
}
