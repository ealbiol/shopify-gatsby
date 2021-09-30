import React from "react";
import { ProductQuantityAdderWrapper } from "./styles"
import { Button } from "../Button"
import { Input } from "../Input"


export function ProductQuantityAdder({ available, variantId }) {

    const [quantity, setQuantity] = React.useState(1); //1.

    const handleQuantityChange = (e) => { //3.
        setQuantity(e.currentTarget.value)
    }

    console.log("--->Quantity", quantity);

    const handleSubmit = (e) => { //8.
        e.preventDefault();
    }

    return (
        <div>
            Product Quantity Adder
            <ProductQuantityAdderWrapper>
                <strong>Quantity</strong>
                <form onSubmit={handleSubmit} > {/* 7. */}

                    <Input
                        disabled={!available} //5.
                        type="number"
                        min="1"
                        step="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />

                    <Button
                        fullWidth /* Sending style prop to styles.js */
                        disabled={!available} //5.
                        type="submit" //6.
                    >
                        Add to cart
                    </Button>
                </form>
                {/* {variantId} */}
            </ProductQuantityAdderWrapper>
        </div>
    )
}

/*
LOGIC OF QUANTITY ADDER

1. We create a useState const called 'quantity' and initial value 1.
2. On the Input component we add a prop called 'value' and its value
is the useState 'quantity. This way the default value of the input will
be 1.

We add another prop called 'onChange' that will be calling a function
called 'handleQuantityChange'

3. We create the 'handleQuantityChange()' function above.

There we add the (e) as we want to use the event object.

Inside the function we want to update the quantity state with the new value
of the input (remember this function is called with an onChange in the input)

We update the state of 'quantity' with e.currentTarget.value as there is where
the input value is stored (it's an object).

4. Setting the arrows to chose the amount with type, min and step.

5. We add a 'disabled' prop to Input if the prop 'available' is false.
This means there is no stock. Remember 'available' is a prop we received
from index.js in ProductTemplate. Disabled is a style.

We do the same for the button.

6. We add a type 'submit' to the bottom.
7. We add the event onSubmit in form that will trigger the function
'handleSubmit'

8. We build the function 'handleSubmit' passing (e) for the event.
We add inside preventDefault to avoid refreshing the page.
*/