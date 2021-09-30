import styled, { css } from "styled-components";

//function for button to take the whole width available.
//We have received the prop 'fullWidth' from index.js in ProductQuantityAdder.
const fullWidthStyles = ({ fullWidth }) => {
    if (fullWidth) {
        return css`
        display: block;
        width: 100%;
        `
    }
}

export const Button = styled.button`
outline: none;
padding: 0 10px;
height: 44px;
line-height: 44px;
box-shadow: none;
font-size: 16px;
font-family: "Open Sans", sans-serif;
cursor: pointer;
font-weight: bold;
text-transform: uppercase;
background: white;
color: black;
border: 1px solid black;
white-space: nowrap;
${fullWidthStyles} //Adding function to styles

&:hover:not(:disabled){
    color: white;
    background: black;
    border: 1px solid rgba(0,0,0,0);
}

&:disabled{ //When button is unavailable.
    border-color: #999;
    cursor: not-allowed;
    color: #999
}
`