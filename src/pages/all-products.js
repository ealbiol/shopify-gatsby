// A L L   P R O D U C T S   P A G E

import React from "react"
import { Layout, Filters, ProductsGrid } from "components"
import ProductContext from "../context/ProductContext"
import styled from "styled-components"

//We don't create a styles.js file for this component as in gatsby within pages we can't
//add anything other than pages. That's the reason we create the styled component here.
const Content = styled.div`
display: grid;
grid-gap: 20px;
margin-top: 20px;
grid-template-columns: 1fr 3fr;
`




export default function AllProducts() {

    const { products, collections } = React.useContext(ProductContext) //Destructuring products and collections to be able to use them.
    console.log("---> Products:", products);

    const collectionProductMap = {}

    const filterByCategory = (product) => {

    }

    const filteredProducts = products.filter(filterByCategory)

    return (
        <Layout>
            <h4>{products.length} products</h4>
            <Content> {/* styled component created on top of this page component. */}
                <Filters />
                <div>
                    <ProductsGrid products={products} /> {/* We reuse the ProductsGrid component and we pass/send the products prop. */}
                </div>
            </Content>

        </Layout>
    )
}


/*
The 12 products are displayed. We want now to filter out all the ones that don't match
the any of the pressed/checked categories.

A)
*/