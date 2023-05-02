import {Children, isValidElement} from 'react';
import {Route, Routes} from 'react-router-dom';

import './Tabs.css';

type Props = {
  children?: React.ReactNode;
};

const mapRoutes = (element: React.ReactNode): React.ReactNode => {
  return (
    element &&
    Children.map(element, (childElement) => {
      if (!childElement || !isValidElement(childElement)) return null;
      const {id, children} = childElement.props;
      return (
        <Route key={id} path={`${id}`} element={childElement}>
          {mapRoutes(children)}
        </Route>
      );
    })
  );
};

export default function Tabs({children}: Props) {
  return (
    <>
      <Routes>{mapRoutes(children)}</Routes>
    </>
  );
}
