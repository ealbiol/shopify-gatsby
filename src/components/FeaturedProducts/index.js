import React from "react"
import { ProductsGrid } from "components"
import ProductContext from "../../context/ProductContext"

export function FeaturedProducts() {
    const { collections } = React.useContext(ProductContext) //Receiving destructured collections from ProductContext

    const FeaturedCollection = collections.find(collection => collection.title === "Featured Hats")

    console.log("---> Featured Collection:", FeaturedCollection);

    return (
        <section>
            <h1>Featured hats</h1>
            <ProductsGrid products={FeaturedCollection.products} />
        </section>
    )
}

/*
EXPLANATION of FEATURED PRODUCTS:

This component renders the products of an specific collection. In this case we want to
render the Featured Products collection.

In order to do that we import the ProductContext so that we get the array with all the
collections.

We want to get only the collection Featured Hats so we apply a find method to 'collections'
and we want to find only the collection whose name is equal to "Featured Hats".

We create a child component called 'ProductsGrid' and we send as a prop the found with
the method find 'FeaturedCollection' with .products. This way we are only getting the
products of the collection "FeaturedCollection"

In the ProductsGrid (the child component) we then render the titles of the products in a .map.
*/