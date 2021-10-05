import React from "react"
import ProductContext from "../../context/ProductContext"
import { CategoryFilterItem } from "components"
import { FiltersWrapper } from "./styles"

export function Filters() { //Not receiving any props since we are importing the ProductContext props below.

    const { products, collections } = React.useContext(ProductContext) //Destructuring products and collections to be able to use them.

    return (
        <FiltersWrapper>
            <strong>
                Categories
            </strong>
            {
                collections.map(collection => (
                    <CategoryFilterItem
                        key={collection.shopifyId}
                        title={collection.title} //Sending 'title'  (to child component 'CategoryFilterItem') that comes from 'collections' that comes from ProductContext.
                        id={collection.shopifyId}
                    />
                ))
            }
        </FiltersWrapper>
    )
}

