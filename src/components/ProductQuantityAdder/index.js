import React from "react";
import { ProductQuantityAdderWrapper } from "./styles"

export function ProductQuantityAdder({ available, variantId }) {
    return (
        <div>
            Product Quantity Adder
            <ProductQuantityAdderWrapper>
                <strong>Quantity</strong>
                <form>

                </form>
                {variantId}
            </ProductQuantityAdderWrapper>
        </div>
    )
}