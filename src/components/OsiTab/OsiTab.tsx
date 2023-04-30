import {Children, cloneElement, isValidElement, useEffect, useMemo, useState} from 'react';
import {NavLink} from 'react-router-dom';

import './OsiTab.css';

type Props = {
  id: string;
  parentId?: string;
  label: string;
  children?: React.ReactNode;
};

export default function OsiTab({id, label, children, parentId}: Props) {
  const relativePath = `${parentId}/${id}`;

  return (
    <>
      <NavLink
        to={relativePath}
        id={id}
        className='tab'
      >
        {label}
      </NavLink>
      {children &&
        Children.map(children, (child) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child, {
            ...child.props,
            parentId: relativePath,
            key: child.props.id
          });
        })}
    </>
  );
}
