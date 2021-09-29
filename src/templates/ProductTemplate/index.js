// PRODUCT TEMPLATE PAGE.
//This is the product page template for each product. From here all product pages are created using the following template below. 
//The creation of page generation comes from gatsby-node.js

import React from "react";
import { graphql } from "gatsby";
import { Layout, ImageGallery } from "components" //Absolute path thanks to 'onCreateWebpackConfig'on gatsby-node.js and index.js of components folder. Video 14. Layout comes from components folder.
import { Grid, SelectWrapper } from "./styles"
import CartContext from "context/CartContext"

export const query = graphql` 
query MyProductQuery($shopifyId: String){
    shopifyProduct(shopifyId: {eq: $shopifyId}) {
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
} 
`
//The graphql call here is different as when we export a query from a page is called a Page Query.
//$: Here we specify the name of the variable

export default function ProductTeample(props) { // Name created here. All query requested on graphql will be injected as props. There we can find 'data', 'title' inside, etc.
  console.log("---> Props of the product:", props); //Here we receive as props the context created in gatsby-node.js. Therefore the shopifyId of the product.

  const { getProductById } = React.useContext(CartContext); //Receiving the function getProductById.
  const [product, setProduct] = React.useState(null);


  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      //Here we are getting a specific product object by within the () indicating the id of the one we want.
      //The id is gotten from the graphQL above as we asked for the shopifyId within the function.
      console.log("Product object:", result);
      setProduct(result) //Here we are saving the product object into the useState 'Product'
    })
  }, [getProductById, setProduct])

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && //optional chaining?: meaning if product (useState const) has content or if its empty. &&: if true
            <>
              <SelectWrapper>
                <strong>Variant</strong>
                <select>
                  {product?.variants.map((variant, id) => ( //product useState contains the product object with its variants.
                    <option key={id} >
                      {variant.title}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
            </>}
        </div>
        <div>
          <ImageGallery images={props.data.shopifyProduct.images} /> {/* 'images' prop name created by us here. It will be sent and received in the component 'ImageGallery'. Here both the main image and the thumbnails are rendered. */}
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


/* EXPLANATION OF getProductById:

PRODUCT WITH ALL VARIANTS DATA INSIDE.

Each product has its variants inside. A variant is not an independent product. It is just a variant.
A product is as an object with its variants inside. A variant does not constitute a product itself
but its part of a product.

--> const { getProductById } = React.useContext(CartContext);
--> Receiving the function getProductById. It comes from CartContext and
it contains a product object when giving its id.

--> getProductById(props.data.shopifyProduct.shopifyId).then(result => {
--> Here we are getting a specific product object by within the () indicating the id of the one we want.
The id is gotten from the graphQL above as we asked for the shopifyId within the function.

--> setProduct(result)
Here we are saving the product object into the useState 'Product'.


When rendering:

-->{product?.variants.map((variant, id) => (
--> We iterate with a map to each variant to get the title which is its color.
product useState contains the product object.


Within this product we can find its variants, its availability, etc
*/