// A L L   P R O D U C T S   P A G E

import React from "react"
import { Layout } from "components"
import ProductContext from "../context/ProductContext"

export default function AllProducts() {
    const { products, collections } = React.useContext(ProductContext) //Destructuring products and collections to be able to use them.
    console.log("---> Products:", products);
    return (
        <Layout>
            <h4>{products.length} products</h4>
            <div>
                {
                    collections.map(collection => (
                        <div key={collection.shopifyId} >{collection.title}</div>
                    ))
                }
            </div>

        </Layout>
    )
}