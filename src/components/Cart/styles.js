import styled from "styled-components";
import { StyledLink } from "../StyledLink";

export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: "/cart"
}))`
margin-left: auto;
display: flex;
color: black;
text-decoration: none;

>div:last-child{
    padding-left: 8px;
    margin: auto 0;
}
&:hover{
   text-decoration: underline; 
}
`

/*
StyledLink explanation on video section 32.
Link provided from professor:
https://styled-components.com/docs/advanced#styling-normal-react-components
*/