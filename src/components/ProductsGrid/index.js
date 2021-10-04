import React from "react";
import { ProductsGridWrapper } from "./styles"
import { ProductTile } from "components"

export function ProductsGrid({ products }) { //Receiving products (of FeaturedCollection only as we applied a .find method) destructured from FeaturedProducts
    console.log("---> Products:", products);
    return (
        <ProductsGridWrapper>
            {
                products.map(product => (
                    <ProductTile
                        key={product.shopifyId}
                        title={product.title}
                        imageFluid={product.images[0].localFile.childImageSharp.fluid} // [0] since we want to get the first image of the array of images that each product has.
                        description={product.description}
                        minPrice={product.priceRange.minVariantPrice.amount}
                        handle={product.handle}
                    />
                ))
            }
        </ProductsGridWrapper>
    )
}

/*
EXPLANATION of ProductsGrid:

Here we are receiving the prop products from the parent component 'Featured Products'.
In the parent component we established that 'products' prop has as a value the
'FeaturedCollection' const. This const has inside the Featured Hats collection.

Since the collection 'Featured Hats' has several products we then apply a .map to render
the title of each one.
*/