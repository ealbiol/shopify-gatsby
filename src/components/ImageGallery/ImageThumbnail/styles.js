import styled from "styled-components"

export const ImageThumbnailWrapper = styled.div`
cursor: pointer;
border: 4px solid ${props => (props.isActiveD ? "blue" : "#eee")};
`
/*
border: 4px solid ${props => (props.isActiveD ? "blue" : "#eee")};

With stypedComponents with are establishing that the frame color of the border will be blue if
the prop 'isActiveD' is received (we sent it to the ImageThumbnailWrapper on index.js of ImageThumbnail)
AND the condition of 'isActive' is true. If it is not true the ternary operator will send back the color
#eee which is gray.
*/