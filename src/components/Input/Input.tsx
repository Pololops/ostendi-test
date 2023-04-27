import {useGlobalContext} from '../../hooks/useGlobalContext';

import './Input.css';

export default function Input() {
  const {routes} = useGlobalContext();

  return <input type="text" value={`tabs_0/${routes[0]}`} disabled />;
}
