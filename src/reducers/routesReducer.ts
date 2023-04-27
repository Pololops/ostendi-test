import initialRoutesState from '../states/routesState';
import { formatRoute } from '../utils/routesUtils'; 

export enum ROUTES_ACTION_TYPES {
  ADD_ROUTE = 'ADD_ROUTE',
}

export type RoutesReducerAction = {
  type: ROUTES_ACTION_TYPES;
  payload: { id: string };
}

export default (state = initialRoutesState, { type, payload }: RoutesReducerAction): string[] => {
  switch (type) {
    case ROUTES_ACTION_TYPES.ADD_ROUTE: {
      const { id } = payload;
      const newState = [...state];
      
      newState.unshift(formatRoute(id));

      return newState;
    }

    default:
      return state;
  }
}
