import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from "../Header"


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper> {/* styled component */}
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
