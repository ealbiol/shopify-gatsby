// PRODUCT TEMPLATE PAGE.
//This is the product page template for each product. From here all product pages are created using the following template below. 
//The creation of page generation comes from gatsby-node.js

import React from "react";
import { graphql } from "gatsby";
import { Layout, ImageGallery } from "components" //Absolute path thanks to 'onCreateWebpackConfig'on gatsby-node.js and index.js of components folder. Video 14. Layout comes from components folder.
import { Grid, SelectWrapper, Price } from "./styles"
import CartContext from "context/CartContext"
import { navigate, useLocation } from "@reach/router" //URL variant related. Package added by professor.
//navigate: allows us to nagivate to a partiular URL by JS.
//useLocation: Returns us a bunch of different things specific to the current url we are on. Ex: params
import queryString from "query-string" //URL variant related. Package added by professor.

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
//$: Here we specify the name of the variable.

export default function ProductTeample(props) { // Name created here. All query requested on graphql will be injected as props. There we can find 'data', 'title' inside, etc.
  console.log("---> Props of the product:", props); //Here we receive as props the context created in gatsby-node.js. Therefore the shopifyId of the product.

  const { getProductById } = React.useContext(CartContext); //Receiving the function getProductById.
  const [product, setProduct] = React.useState(null);
  const [selectedVariant, setSelectedVariant] = React.useState(null)
  const { search, origin, pathname } = useLocation(); //Getting it destructured from the import useLocation.
  console.log("--->Search:", "1:", search);
  console.log("--->Origin:", "2:", origin);
  console.log("--->Pathname:", "3:", pathname);
  const variantId = queryString.parse(search).variant //<-- search parsed into an object.
  console.log("--->variantId:", variantId);

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      //Here we are getting a specific product object by within the () indicating the id of the one we want.
      //The id is gotten from the graphQL above as we asked for the shopifyId within the function.
      console.log("--->Product object:", result);
      setProduct(result) //Here we are saving the product object into the useState 'Product'
      setSelectedVariant(result.variants.find(({ id }) => id === variantId) || result.variants[0]) //Setting the first variant as default
    })
  }, [getProductById, setProduct, props.data.shopifyProduct.shopifyId, variantId])


  const handleVariantChange = (e) => { // (e) to access the event object.
    const newVariant = product?.variants.find(variant => variant.id === e.target.value);
    setSelectedVariant(newVariant)
    //by 'product' we are accessing the product state.
    //Here we save as SelectedVariant the product which its variant.id is the same as the value in the select (e.target.value)
    //URL for variants video 23 and 24.
    navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`, {
      replace: true
    })
  }
  console.log("--->Selected Variant:", selectedVariant);
  console.log("--->Selected Variant Name:", selectedVariant?.title);
  return (
    <Layout>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant &&//optional chaining?: meaning if product (useState const) has content or if its empty. &&: if true
            <>
              {product?.variants.length > 1 && //if there are no variants then there is no select by stating that if the products.vatiants.length is superior than 1 then the selectWrapper is renderised. Otherwise not.
                <SelectWrapper>
                  <strong>Variant</strong>
                  <select value={selectedVariant.id} onChange={handleVariantChange} >
                    {product?.variants.map((variant) => ( //product useState contains the product object with its variants.
                      <option key={variant.id} value={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              }
              {!!selectedVariant && <Price>{selectedVariant?.price}Є</Price> /* !! === if?*/}
            </>}
        </div>
        <div>
          <ImageGallery selectedVariantImageId={selectedVariant?.image.id} images={props.data.shopifyProduct.images} /> {/* 'images' prop name created by us here. It will be sent and received in the component 'ImageGallery'. Here both the main image and the thumbnails are rendered. */}
        </div>
      </Grid>
    </Layout>
  )
}




/*
---------------> EXPLANATION OF ' shopifyProduct(shopifyId: {eq: shopifyId}) ':

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


/* ---------------> EXPLANATION OF getProductById:

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


/*
---------------> EXPLANATION OF selectedVariant

We want that when we choose a variant from the drop-down menu we get the data
of that variant (its title, price, etc).

--> We set a useState called selectedVariant.

--> Within the getProductById we change the value from the state selectedVariant
from null to the first variant[0]. Its inside the getProductById function since
in that function we get all the product data.

--> On the <select> tag we add an onChange event that will trigger a function
called 'handleVariantChange'.

--> Within that function we need to get the data of the selected variant
and save it on the state 'selectedVaraint'.

We use the function of the state setSelectedVariant and there we have to get
the selected variant.

To get it we use the state 'product' (which contains the product given an id
from getProductById) and we access its variants.

KEY: There we apply the 'find' method and we look for a variant.id (from the product object)
that is equal to the e.target.value . Remember that in the .map we added a prop called
'value' and we added that its value is equal to the id of the variant.

Therefore when selecting a variant in the dropdown menu <select> the find method will
find and save in the state SelectedVariant a product.variant.id (from the several it has)
that is equal to the target.value remembering that the value of the prop 'value' is
the variant.id since this is how we specified in the .map:

 {product?.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>

It compares all the id's the object product has with the id of the value.target
And then the variant that matches this find is saved in the state selectedVariant.

CHANGE: const newVariant added.
*/

