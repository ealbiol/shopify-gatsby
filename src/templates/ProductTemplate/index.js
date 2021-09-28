// PRODUCT TEMPLATE PAGE.
//This is the product page template for each product. From here all product pages are created using the following template below. 
//The creation of page generation comes from gatsby-node.js

import React from "react";
import { graphql } from "gatsby";
import { Layout, ImageGallery } from "components" //Absolute path thanks to 'onCreateWebpackConfig'on gatsby-node.js and index.js of components folder. Video 14. Layout comes from components folder.
import { Grid } from "./styles"

export const query = graphql` 
query MyProductQuery($shopifyId: String){
    shopifyProduct(shopifyId: {eq: $shopifyId}) {
        title
        description
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      } 
} 
`
//The graphql call here is different as when we export a query from a page is called a Page Query.
//$: Here we specify the name of the variable

export default function ProductTeample(props) { // Name created here. All query requested on graphql will be injected as props. There we can find 'data', 'title' inside, etc.
    console.log("---> Props of the product:", props); //Here we receive as props the context created in gatsby-node.js. Therefore the shopifyId of the product.
    return (
        <Layout>
            <Grid>
                <div>
                    <h1>{props.data.shopifyProduct.title}</h1>
                    <p>{props.data.shopifyProduct.description}</p>
                </div>
                <div>
                    <ImageGallery images={props.data.shopifyProduct.images} /> {/* 'images' prop name created by us here.  */}
                </div>
            </Grid>
        </Layout>
    )
}












/*
EXPLANATION OF ' shopifyProduct(shopifyId: {eq: shopifyId}) ':

export const query = graphql`
query MyProductQuery($shopifyId: String){
    shopifyProduct(shopifyId: {eq: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzcwNDg3ODg2Mzk5MjI="}) {
        title
      }
}
`

1. On gatsby-node.js we created the page generator with a for Each loop. Within that function we iterate through every product and we get as prop in context the shopifyId of each product.
2. A url is also generated for each product. Therefore we have a url for each product and a shopifyId for each product.
3. Here we do a query to look for a specific product and we do it by telling the query we want the product with the shopifyId that the user underhood choses when entrying to a page product.


*/