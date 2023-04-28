// import {TABS_ACTION_TYPES} from '../../reducers/tabsReducer';
// import {useGlobalContext} from '../../hooks/useGlobalContext';

import './OsiTab.css';
import {NavLink} from 'react-router-dom';

type Props = {
  id: string;
  label: string;
  children?: React.ReactNode;
};

export default function OsiTab({id, label, children}: Props) {
  // const {tabsDispatch} = useGlobalContext();

  // const handleClick = (event: any) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   tabsDispatch({type: TABS_ACTION_TYPES.TOGGLE_ACTIVE, payload: {id}});
  // };

  return (
    <li id={id} className="tab">
      <NavLink to={id} className="tab__title">
        {label}
      </NavLink>
      {children}
    </li>
  );
}
