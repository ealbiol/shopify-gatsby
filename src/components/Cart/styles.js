import styled from "styled-components";
import { StyledLink } from "../StyledLink";

export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: "/cart" //Here we establish that it will sent us to a page called 'cart'.
}))`
display: flex;
color: black;
text-decoration: none;
padding-left: 16px;

>svg{
    margin: auto 0;
}

>div:last-child{
    padding-left: 8px;
    margin: auto 0;
}
&:hover{
   text-decoration: underline; 
}
`

/*
LINK TO THE CART PAGE:
StyledLink explanation on video section 32.
Link provided from professor:
https://styled-components.com/docs/advanced#styling-normal-react-components
*/