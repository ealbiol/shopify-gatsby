import React from 'react';
import CartContext from "context/CartContext"
import { CartItem, CartHeader, CartFooter, Footer } from "./styles"
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';
import { Button } from "../Button"
import { navigate } from "@reach/router"

export function CartContents() {

    const { checkout, updateLineItem } = React.useContext(CartContext)
    //Destructured Cartontext to consume its content.

    console.log("----->CHECK OUT CART:", checkout);

    const handleAdjustQuantity = ({ quantity, variantId }) => { //Destructured quantity and variantId taken from checkout object from context.
        updateLineItem({ quantity, variantId })
    }

    return (
        <section>
            <h1>Your cart</h1>

            {!!checkout?.lineItems && //if there are lineItems in the checkout then we render the CartHeader.

                <CartHeader>
                    <div>Product</div>
                    <div>Unit Price</div>
                    <div>Quantity</div>
                    <div>Amount</div>
                </CartHeader>

            }

            {checkout?.lineItems?.map(item => ( //rendering conditional if checkout object has data on it (lineItems).
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
                        <QuantityAdjuster item={item} on whenAdjusting={handleAdjustQuantity} /> {/* Sending props to child index.js from QuantityAdjuster */}
                    </div>
                    <div>{(item.quantity * item.variant.price).toFixed(2)}€</div> {/* quantity * price */}
                    <div>
                        <RemoveLineItem lineItemId={item.id} />
                    </div>
                </CartItem>
            ))}


            {!!checkout?.lineItems && //rendering conditional if the checkout has lineItems.
                <CartFooter>
                    <div>
                        <strong>Total:</strong>
                    </div>
                    <div>
                        <span>{checkout?.totalPrice}€</span>
                    </div>
                </CartFooter>
            }
            {!checkout?.lineItems && //rendering conditional if the checkout doesn't have lineItems
                <h4>Your cart is empty.</h4>
            }


            <Footer>
                <div>
                    <Button onClick={() => navigate(-1)}>
                        Continue shopping
                    </Button>
                </div>

                <div>
                    {!!checkout?.webUrl && //conditional if the checkout object has data.

                        <Button onClick={() => {
                            window.location.href = checkout.webUrl; //checkout comes from the CartContext and its a shopify page for checkout with all our products.
                        }} >
                            Checkout
                        </Button>

                    }

                </div>
            </Footer>
        </section>
    )
}

//Through useContext we get the checkout object.