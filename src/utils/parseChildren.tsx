import { Children, cloneElement, isValidElement } from 'react';

export const parseChildren = (
  children: React.ReactNode,
  addProps: {[key: string]: unknown}
) => {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    return cloneElement(child, {
      ...child.props,
      ...addProps,
      key: child.props.id
    });
  });
};