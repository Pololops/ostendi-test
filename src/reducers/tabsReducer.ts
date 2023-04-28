import initialTabsState from '../states/tabState';
import { toggleTabActivation } from '../utils/tabsUtils';

export enum TABS_ACTION_TYPES {
  TOGGLE_ACTIVE = 'TOGGLE_ACTIVE',
}

export type TabsReducerAction = {
  type: TABS_ACTION_TYPES;
  payload?: { id: string };
}

export default (state = initialTabsState, { type, payload }: TabsReducerAction): TabType[] => {
  switch (type) {
    case TABS_ACTION_TYPES.TOGGLE_ACTIVE: {
      const id = payload?.id || 'tabs_0';

      return toggleTabActivation([...state], id);
    }

    default:
      return state;
  }
}
