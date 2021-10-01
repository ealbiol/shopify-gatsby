import { graphql } from "gatsby";

export const productFields = graphql`
fragment ShopifyProductFields on ShopifyProduct{ 
    shopifyId
        title
        description
        images {
            id
          localFile {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
}
`

/*
F R A G M E N T S

It allows to shorten code by adding here a specific query part (or all) so that when we use it
somewhere we only need to add the fragment name after '...'.

Steps:

1. Create a fragment folder in the src level and an index.js folder inside.
2. On top of the query add 'fragment'.
3. After 'fragment' add the name of this specific fragment,
4. After the name ad 'on' and the model we are querying (the main 'folders' appearing in graphql)

Result: fragment ShopifyProductFields on ShopifyProduct{

5. On any place where you have this query saved under this fragment you can replace that part
and add '...' and the given name of the specific fragment.

E.G:

export const query = graphql`
query MyProductQuery($shopifyId: String){
    shopifyProduct(shopifyId: {eq: $shopifyId}) {
        ...ShopifyProductFields
      }
}
`

IMPORTANT: There is no need to import this file anywere. This fragments will be read.
Video Explanation about fragments: 38.
*/