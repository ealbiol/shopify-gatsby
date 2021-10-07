import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Myquery = graphql`
 fragment ProductTileFields on ShopifyProduct{
   handle
   priceRange{
     minVariantPrice{
       amount
     }
   }
 }


{
  allShopifyProduct{
    edges{
      node{
        ...ShopifyProductFields
        ...ProductTileFields
      }
    }
  }


  allShopifyCollection(sort: {fields: title, order: ASC}) {
    edges {
      node {
        products {
          ...ShopifyProductFields
          ...ProductTileFields
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
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(Myquery) //Collecting Data and storing it on allShopifyCollection.

  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node),
        collections: allShopifyCollection.edges.map((item) => item.node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

/*
EXPLANATION of allShopifyProcut.

- The ContextProvider allows us to import certain data from any component within our app.
- We pass this data as props inside a one prop. In this case the topper prop is called 'value'.
- The value of the prop 'products' is the data within allShopifyProduct and with a .map method
so that all products are rendered.

'allShopifyProduct' obtains the data from the graphQL query from above:
--->
{
  allShopifyProduct{
    edges{
      node{
        ...ShopifyProductFields
        ...ProductTileFields
      }
    }
  }

  - We need to import the StaticQuery from gatsby and add this query within MyQuery
  and inside the ProductContextProvider:

  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(Myquery)


  '...GatsbyImageSharpFluid_withWebp': This fragment comes from gatsby. You didn't create it.
  It gives you the image.
*/
