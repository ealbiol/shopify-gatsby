import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Myquery = graphql`
 {
  allShopifyCollection {
    edges {
      node {
        products {
          ...ShopifyProductFields
        }
        title
        description
        shopifyId
        image{
          localFile{
            childImageSharp{
              fluid(maxWidth: 1200){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}`


const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  //Eiter commented version or the one below:
  // const { allShopifyCollection } = useStaticQuery(Myquery) //Collecting Data and storing it on allShopifyCollection.
  const data = useStaticQuery(Myquery) //1.

  return (
    <ProductContext.Provider
      value={{
        products: [],
        //Eiter commented version or the one below:
        // collections: allShopifyCollection.edges.map((item) => item.node),
        collections: data.allShopifyCollection.edges.map(item => item.node), //2.
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

/*
EXPLANATION on how to do a graphQL query in a Context component so that it can be used
everywhere:

1. We use the useStaticQuery to store in the const 'data' the query 'Myquery'.
2. In the renderisation (return) we do a .map of data, allShopifyCollection and edges
therefore we get all the items. This .map result is stored in a prop called 'collections'
that will be able to be used as a prop everywhere when importing the ProductContext.

In this case we will use the prop collections importing ProductContext in 'index.js' from pages
(the main page of the site).
*/
