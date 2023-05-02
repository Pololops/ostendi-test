import {
  useEffect,
  useMemo,
  useState
} from 'react';
import {useLocation} from 'react-router-dom';

import {parseChildren} from '../../utils/parseChildren';

import './OsiTabs.css';

type Props = {
  id: string;
  parentPath?: string;
  label: string;
  children?: React.ReactNode;
};

export default function OsiTabs({id, children, parentPath}: Props) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const relativePath = parentPath
    ? `${parentPath}/${id}`
    : `/${id}`;

  const isIdFound = useMemo(() => {
    const splitPath = location.pathname.split('/');
    const endPath = splitPath.at(-1);
    if (endPath) {
      splitPath.push(endPath.replace('ab_', 'abs_'));
    }

    return splitPath.includes(id);
  }, [location, id]);

  useEffect(() => {
    setIsActive(false);
    if (isIdFound) {
      setIsActive(true);
    }
  }, [isIdFound]);

  return (
    <>
      {isActive && (
        <div id={id} className={'tabs'}>
          {parseChildren(children, {parentPath: relativePath, isTabActive: false})}
        </div>
      )}
    </>
  );
}
