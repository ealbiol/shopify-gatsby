import React from "react"
import { ProductTileWrapper } from "./styles"
import Img from "gatsby-image"

export function ProductTile({ title, imageFluid }) {
    return (
        <div>
            <ProductTileWrapper>
                <Img fluid={imageFluid} />
                <div>
                    {title}
                </div>
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