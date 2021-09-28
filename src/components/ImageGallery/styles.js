import styled from "styled-components";

export const ImageGalleryWrapper = styled.section`
> div:first-child{ //Targeting first child.
    border: 5px solid #ccc;
}

>div:last-child{ //Targeting last child.
    //Here we create a grid to display the thumbnail pics in a grid.
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;

    @media(min-width: 768px){ //Tablet view
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media(min-width: 768px){ //Desktop View
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
`