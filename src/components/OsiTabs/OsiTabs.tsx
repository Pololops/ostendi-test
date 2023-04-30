import {Children, cloneElement, isValidElement, useEffect, useMemo, useState} from 'react';

import './OsiTabs.css';
import { useLocation } from 'react-router-dom';

type Props = {
  id: string;
  parentId?: string;
  label: string;
  children?: React.ReactNode;
};

export default function OsiTabs({id, children, parentId}: Props) {
  const location = useLocation();
  const relativePath = parentId ? `${parentId}/${id}` : id;
  const [isActive, setIsActive] = useState(false);
  
  const isIdFound = useMemo(
    () => {
      const splitPath = location.pathname.split('/');
      const endPath = splitPath.at(-1)?.replace('ab_', 'abs_');
      const newPatch = [...splitPath, endPath];

      return newPatch.includes(id);
    },
    [location, id]
  );

  useEffect(() => {
    setIsActive(false);
    if (isIdFound) {
      setIsActive(true);
    }
  }, [isIdFound]);

  return (
    <>
      {isActive && <div id={id} className={'tabs'}>
        {/* {children} */}
        {children &&
          Children.map(children, (child) => {
            if (!isValidElement(child)) return child;
            return cloneElement(child, {
              ...child.props,
              parentId: relativePath,
              key: child.props.id
            });
          })}
      </div>}
    </>
  );
}
