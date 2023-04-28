import {TABS_ACTION_TYPES} from '../../reducers/tabsReducer';
import {ROUTES_ACTION_TYPES} from '../../reducers/routesReducer';
import {useGlobalContext} from '../../hooks/useGlobalContext';

import './OsiTab.css';

type Props = {
  id: string;
  label: string;
  children?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export default function OsiTab({
  id,
  label,
  children,
  isActive,
  onClick
}: Props) {
  const {tabsDispatch, routesDispatch} = useGlobalContext();

  const handleClick = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    tabsDispatch({type: TABS_ACTION_TYPES.TOGGLE_ACTIVE, payload: {id}});
    routesDispatch({type: ROUTES_ACTION_TYPES.ADD_ROUTE, payload: {id}});
  };

  return (
    <li id={id} className="tab" onClick={handleClick}>
      <span
        className={isActive ? 'tab__title tab__title--active' : 'tab__title'}
      >
        {label}
      </span>
      {children}
    </li>
  );
}
