import initialState from '../store/initialState'

export enum ACTION_TYPES {
  TAB_IS_ACTIVE = 'TAB_IS_ACTIVE',
  TOGGLE_ACTIVE = 'TOGGLE_ACTIVE',
}

export type TabsReducerAction = {
  type: ACTION_TYPES;
  payload: {
    id: string;
  };
}

export default (state = initialState, { type, payload }: TabsReducerAction): TabType[] => {
  switch (type) {
    case ACTION_TYPES.TOGGLE_ACTIVE: {
      const { id } = payload;
      // const modifiedState = [...state];

      const addIsActive = (tabs: TabType[]) => {
        return tabs.map((tab) => {
          const newTab = (id.includes(tab.id)) ? { ...tab, isActive: true } : { ...tab, isActive: false };
          if (tab.children) {
            newTab.children = addIsActive(tab.children);
          }
          return newTab;
        });
      };

      const modifiedState = addIsActive([...state]);

      return modifiedState;
    }

    default:
      return state;
  }
}
