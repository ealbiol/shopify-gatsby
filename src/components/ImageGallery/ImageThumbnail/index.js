import React from "react";
import Image from "gatsby-image"
import { ImageThumbnailWrapper } from "./styles"

export default function ImageThumbnail({ isActive, onClick, image }) { //Receiving/Passing 3 props
    return (
        <ImageThumbnailWrapper
            onClick={() => {
                console.log("Click");
            }}
        >
            <Image fluid={image} />
        </ImageThumbnailWrapper>
    )
}
