import React from "react";
import { ProductQuantityAdderWrapper } from "./styles"
import { Button } from "../Button"
import { Input } from "../Input"


export function ProductQuantityAdder({ available, variantId }) {
    return (
        <div>
            Product Quantity Adder
            <ProductQuantityAdderWrapper>
                <strong>Quantity</strong>
                <form>
                    <Input />
                    <Button fullWidth > {/* Sending style prop to styles.js */}
                        Add to cart
                    </Button>
                </form>
                {/* {variantId} */}
            </ProductQuantityAdderWrapper>
        </div>
    )
}