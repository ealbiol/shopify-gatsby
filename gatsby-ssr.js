import React from 'react';
import { ProductContextProvider } from './src/context/ProductContext';
import { CartContextProvider } from './src/context/CartContext';
import { GlobalStyle } from './src/components/globalStyles';

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>{element}</CartContextProvider>
  </ProductContextProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);

/*
This file renders the same thing as gatsby-browser.js

The MAIN DIFFERENCE is that this file is going to be rendered in SSR (Server Side Rendering), this means is going to be rendered from the server.
Is going to be used in the generation of the static files.
*/