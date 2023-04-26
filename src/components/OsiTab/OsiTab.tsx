import {ACTION_TYPES} from '../../reducer/tabsReducer';
import {useTabsContext} from '../../context/tabsContext';

import './OsiTab.css';

type Props = {
  id: string;
  label: string;
  children?: React.ReactNode;
  isActive?: boolean;
};

export default function OsiTab({id, label, children, isActive}: Props) {
  const {tabsDispatch} = useTabsContext();

  const handleClick = () => {
    tabsDispatch({type: ACTION_TYPES.TOGGLE_ACTIVE, payload: {id}});
  };

  return (
    <li id={id} className="tab">
      <span
        className={isActive ? 'tab__title tab__title--active' : 'tab__title'}
        onClick={handleClick}
      >
        {label + ' ' + isActive}
      </span>
      {children}
    </li>
  );
}
