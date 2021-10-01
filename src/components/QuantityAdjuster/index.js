import React from "react";
import { QuantityAdjusterWrapper, AdjusterButton } from "./styles"



export function QuantityAdjuster({ item, whenAdjusting }) { //1.

    const { quantity } = item //1.

    const handleDecrementQuantity = () => {
        whenAdjusting({ variantId: item.variant.id, quantity: -1 })
    };

    const handleIncrementQuantity = () => {
        whenAdjusting({ variantId: item.variant.id, quantity: 1 })
    };

    return (
        <QuantityAdjusterWrapper>
            <AdjusterButton onClick={handleDecrementQuantity} >-</AdjusterButton>
            <div>{quantity}</div>
            <AdjusterButton onClick={handleIncrementQuantity} >+</AdjusterButton>
        </QuantityAdjusterWrapper>
    )
}


/*
EXPLANATION + and - increment buttons: video 35

*/