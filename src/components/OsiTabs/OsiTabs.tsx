import { Outlet } from 'react-router';
import './OsiTabs.css';

type Props = {
  id: string;
  label: string;
  children?: React.ReactNode;
};

export default function OsiTabs({id, children}: Props) {
  return (
    <ul id={id} className={'tabs'}>
      <Outlet />
    </ul>
  );
}
