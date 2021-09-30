import React from 'react';
import CartContext from "context/CartContext"
import { CartItem, CartHeader, CartFooter } from "./styles"

export function CartContents() {

    const { checkout } = React.useContext(CartContext)
    //Destructured Cartontext to consume its content.

    console.log("----->CHECK OUT CART:", checkout);

    return (
        <section>
            <h1>Your cart</h1>
            <CartHeader>
                <div>Product</div>
                <div>Unit Price</div>
                <div>Quantity</div>
                <div>Amount</div>
            </CartHeader>
            {checkout?.lineItems?.map(item => (
                <CartItem>
                    <div>
                        <div>
                            {item.title}
                        </div>
                        <div>
                            {item.variant.title === "Default Title" ? "" : item.variant.title} {/* Ternary operator to remove 'Default Title' when product doesn't have variants. */}
                        </div>
                    </div>
                    <div>
                        {item.variant.price}€
                    </div>
                    <div>
                        {item.quantity}
                    </div>
                    <div>{(item.quantity * item.variant.price).toFixed(2)}€</div> {/* quantity * price */}
                </CartItem>
            ))}
            <CartFooter>
                <div>
                    <strong>Total:</strong>
                </div>
                <div>
                    <span>{checkout?.totalPrice}€</span>
                </div>
            </CartFooter>
        </section>
    )
}

//Through useContext we get the checkout object.