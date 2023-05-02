import {NavLink, useLocation} from 'react-router-dom';

import {parseChildren} from '../../utils/parseChildren';
import Panel from '../Panel/Panel';

import './OsiTab.css';

type Props = {
  id: string;
  label: string;
  isTabActive?: boolean;
  children?: React.ReactNode;
  parentPath?: string;
};

export default function OsiTab({
  id,
  label,
  children,
  parentPath,
  isTabActive
}: Props) {
  const location = useLocation();
  const relativePath = `${parentPath}/${id}`;

  const linkSignature: LinkSign = {
    id,
    label,
    path: relativePath,
    key: location.state && 'key' in location.state.at(-1) ? location.state.at(-1).key + 1 : '1'
  };

  return children ? (
    <>
      <NavLink
        to={relativePath}
        id={id}
        className={({isActive}) =>
          isActive || isTabActive ? 'tab tab--active' : 'tab'
        }
        state={location.state ? [...location.state, linkSignature] : [linkSignature]}
      >
        {label}
      </NavLink>
      {parseChildren(children, {parentPath: relativePath})}
    </>
  ) : (
    <Panel isActive={false} />
  );
}
