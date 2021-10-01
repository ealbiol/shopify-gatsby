import React from "react";
import CartContext from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa"
import { Icon } from "./styles"

export function RemoveLineItem({ lineItemId }) { //1.

    const { removeLineItem } = React.useContext(CartContext) //2.

    const handleClick = () => {
        removeLineItem(lineItemId)
    }

    return (
        <Icon onClick={handleClick} > {/* 3. */}
            <FaTrashAlt />
        </Icon>
    )
}

/* DELETE BUTTON EXPLANATION

Parent Component: index.js in CartContents.

1. We receive the lineItemId from 'index.js' from CartContents.
2. We receive the removeLineItem function from the CartContext when destructuring.
3. We add an onClick event to be triggered when clicking on the icon.
4. The function inside calls the shopify built function 'removeLineItem' and there
we pass the lineItemId.

We export this function to index.js in CartContents.
There we send the prop 'lineItemId' to receive it here. This prop contains the item id:
lineItemId={item.id}

Summary:

- We add an onClick event that triggers handleClick.
- There is a function called 'removeLineItem' (created by shopify and coming from CartContext)
that will remove the item by passing it a lineItemId.
- We receive the specific item id by sending the lineItemId that is in this component when rendered
in a .map loop in index.js from CartContents. Remembering that this component is rendered in a .map
loop with an onClick event. That's the way it knows which element id it is and then delete the line.
*/