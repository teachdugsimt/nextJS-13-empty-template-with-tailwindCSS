import React from 'react';
import BlankLayout from './blank-layout';

const withBlankLayout = (Component: React.ElementType) => {
  const WrappedComponent: React.FC = (props) => {
    return (
      <BlankLayout>
        <Component {...props} />
      </BlankLayout>
    );
  };

  return WrappedComponent;
};

export default withBlankLayout;
