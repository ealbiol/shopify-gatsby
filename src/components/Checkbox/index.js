import React from "react";
import { CheckboxWrapper } from "./styles";
import { FaCheck } from "react-icons/fa"

export function Checkbox() {
    return (
        <CheckboxWrapper>
            <div>
                <FaCheck color="white" /> {/* Imported checkbox icon from external library. */}
            </div>
        </CheckboxWrapper>
    )
}