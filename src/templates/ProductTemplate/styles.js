import styled from "styled-components"

//GRID COMPONENT    
export const Grid = styled.section`
display: grid;
grid-template-columns: 1fr; 
//Mobile first. We do first the mobile version and then from there the desktop afterwards.
//Here product picture and text content will be in one column.
grid-gap: 20px;
margin-top: 20px;

@media(min-width: 768px){ // We defind here the style for screens above 768px width.
    grid-template-columns: 1fr 1fr; //Here product picture and text content will be in 2 separated columns each.

    //Changing positions. Image to be the first element and text to be the sencond.
    //Therefore the last goes first and the first goes last.
    >div:first-child{
     order: 2   
    }

    >div:first-child{
     order: 1   
    }
}
`

export const SelectWrapper = styled.div`
margin-top: 40px;
>strong{ //Targetting any strong tag that is inside the SelectWrapper component
    display: block;
    margin-bottom: 8px;
}
`

export const Price = styled.div`
margin: 40px 0;
font-weight: bold;
font-size: 30px;
`

