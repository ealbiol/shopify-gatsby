import styled from "styled-components"

export const RemainingCollections = styled.div`
display: flex;
flex-wrap: wrap;

>div{ //this div is in the CollectionTile
   flex-grow : 1;
   min-width: 100%;

   @media(min-width: 768px){
       min-width: 50%; //Creates 2 tiles per row when we are in tablet view.
   }

   @media(min-width: 1024px){
       min-width: 33%; //Creates 3 tiles per row when we are in desktop view.
   }
}
`

