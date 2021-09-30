import React from 'react';
import CartContext from "context/CartContext"
import { CartItem } from "./styles"

export function CartContents() {

    const { checkout } = React.useContext(CartContext)
    //Destructured Cartontext to consume its content.

    console.log("----->CHECK OUT CART:", checkout);

    return (
        <section>
            <h1>
                Your cart
            </h1>
            {checkout?.lineItems?.map(item => (
                <CartItem>
                    <div>
                        <div>
                            {item.title}
                        </div>
                        <div>
                            {item.variant.title}
                        </div>
                    </div>
                    <div>
                        {item.variant.price}€
                    </div>
                    <div>
                        {item.quantity}
                    </div>
                    <div>{(item.quantity * item.variant.price).toFixed(2)}</div> {/* quantity * price */}
                </CartItem>
            ))}
        </section>
    )
}

//Through useContext we get the checkout object.