import React from "react";
import { CartWrapper } from "./styles";
import { FaShoppingCart } from "react-icons/fa"
import CartContext from "context/CartContext" //1.

export function Cart() {
    const { checkout } = React.useContext(CartContext); //checkout is destructured coming from CartContext.

    console.log("---> Checkout Object:", checkout);

    return (
        <CartWrapper>
            <FaShoppingCart size="1.5em" />
        </CartWrapper>
    )
}

/*
CART CONTEXT & CHECKOUT OBJECT:

We are receiving a global useState prop from context (CartContext.js)
called 'checkout'.

1. import CartContext from "context/CartContext"
2. const { checkout } = React.useContext(CartContext);

In the CartContext.js we have the logic to add, update and remove items that
then will be implemented in the checkout object.

KEY: section video 30:
If we console.log the 'checkout' object after having pressed the button
'Add to Cart' we can see an array in 'lineItems' that contains inside
the product we have added to the cart (title, id, quantity, variant, etc).

If we change the variant and we add it we will get a second array with
that product.
*/