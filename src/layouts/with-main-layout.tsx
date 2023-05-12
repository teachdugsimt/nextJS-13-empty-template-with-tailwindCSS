import React from 'react';
import MainLayout from './main-layout';

const withMainLayout = (Component: React.ElementType) => {
  const WrappedComponent: React.FC = (props) => {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };

  return WrappedComponent;
};

export default withMainLayout;
