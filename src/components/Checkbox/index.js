import React from "react";
import { CheckboxWrapper } from "./styles";
import { FaCheck } from "react-icons/fa"

export function Checkbox({ checked }) { //1. 
    return (
        <CheckboxWrapper checked={checked} > {/* 1. */}
            <div>
                <FaCheck color="white" /> {/* Imported checkbox icon from external library. */}
            </div>
        </CheckboxWrapper>
    )
}

/*
EXPLANATION CHECKBOX CHECKED AND UNCHECKED

1. We create a prop called 'checked' that we are receiving from the parent of this component.
We will now create this prop on the parent and send it here (the child component where we are).

KEY: Then we are going to style the checkbox based on whether 'checked' prop is true or not.

On styles.js:

checkbox black background:
- We go to styles.js. There we will use a ternary operator to determine that if checked is true
  the checkbox background color will be black and if its false it won´t have color:

  background: ${props => props.checked ? "black":"none"}

checkbox arrow:
On the div where the FaCheck is in styles.js we establish the visibility of the div.
If 'checked' is true its visible and if its false its hidden.

    visibility: ${props => props.checked ? "visible" : "hidden"};
*/