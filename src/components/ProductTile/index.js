import React from "react"
import { ProductTileWrapper, Description, Title, Price } from "./styles"
import Img from "gatsby-image"
import { StyledLink } from "../StyledLink"

export function ProductTile({ title, imageFluid, description, minPrice, handle }) {
    return (
        <div>
            <ProductTileWrapper>

                <Img fluid={imageFluid} />
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>from {parseFloat(minPrice).toFixed(2)}{" "}€ {/* Parse: So that prices that are .0 become .00 */}</Price>
                <StyledLink to={`/products/${handle}`} >
                    View Product
                </StyledLink>

            </ProductTileWrapper>
        </div>
    )
}

/*
EXPLANATION AND EXAMPLE OF PROPS TRAVEL:
- Title comes from the .map loop in ProductsGrid. In the .map product.title comes from 'products'
  which was received from ProductsGrid's parent "FeaturedProducts."
- In FeaturedProducts we get the products from FeaturedCollection.
- FeaturedCollection has inside collections.products from that only collection.
- Collections was imported from ProductContext.
*/

/*
In order to render the image we need to do it in an imported Img component from gatsby:
import Img from "gatsby-image"

- Then we pass the imageFluid prop we received from the parent ProductsGrid and we call it
e.g. 'fluid'.
*/

/*
STYLED LINK:

It's a gatsby component that allows to create a url redirection.
E.G:

  <StyledLink to={`/products/${handle}`} >
                    View Product
                </StyledLink>

In handle we have the name of the product. And as we now there is a products/XXX for each product.
*/