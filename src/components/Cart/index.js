import React from "react";
import { CartWrapper } from "./styles";
import { FaShoppingCart } from "react-icons/fa"
import CartContext from "context/CartContext" //1.

export function Cart() {
    const { checkout } = React.useContext(CartContext); //2. checkout is destructured coming from CartContext.

    console.log("---> Checkout Object:", checkout);

    let totalQuantity = 0;
    if (checkout) {
        checkout.lineItems.forEach(lineItem => {
            totalQuantity = totalQuantity + lineItem.quantity;
        })
    }

    console.log("---> Total Quantity of products in checkout:", totalQuantity);

    return (
        <CartWrapper>
            <FaShoppingCart size="1.5em" />
            <div>
                {totalQuantity} item(s) / {checkout?.totalPrice || "0.00"}€
            </div> {/* 4. and 3. */}
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


/*
ADDING THE TOTAL QUANTITY ITEMS AND THE TOTAL PRICE at the CARD COMPONENT
So that we can see it at the top right of the screen.

3. Total Price: The checkout object contains a totalPrice property.
<span>{checkout?.totalPrice}€ || "0.00"</span>


4. Total Quantity:

--> We create a variable called 'totalQuantity' with value 0.
--> We apply an 'if' to check the following: if 'checkout' exists we do the following:
--> We rewrite the value of 'totalQuantity' stating: get the quantity and sum the next
quantity on top of the sum added to the totalQuantity value from before.
 We add the totalQuantity on the card ---> {totalQuantity}
*/