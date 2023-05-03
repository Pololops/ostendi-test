import {useContext} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import {MemoryContext} from '../../contexts/memoryContext';

import {parseChildren} from '../../utils/parseChildren';
import { generateLinkSignature } from '../../utils/generateLinkPath';

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
  const {backState, setBackState, setForwardState, setStateSplitIndex} =
    useContext(MemoryContext);

  const location = useLocation();
  const relativePath = `${parentPath}/${id}`;
    const linkSignature = generateLinkSignature(
      id,
      label,
      relativePath,
      backState
    );

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = () => {
    setBackState((prev) => [...prev, linkSignature]);
    location.state = backState
    setForwardState([]);
    setStateSplitIndex(-1);
  };

  return children ? (
    <>
      <NavLink
        to={relativePath}
        id={id}
        className={({isActive}) =>
          isActive || isTabActive ? 'tab tab--active' : 'tab'
        }
        onClick={handleClick}
      >
        {label}
      </NavLink>
      {parseChildren(children, {parentPath: relativePath})}
    </>
  ) : (
    <Panel isActive={false} />
  );
}
