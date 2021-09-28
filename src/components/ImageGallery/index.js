import React from "react";
import Image from "gatsby-image"
import { ImageGalleryWrapper } from "./styles"

export function ImageGallery({ images }) { //Receiving prop.
    console.log("Images:", images);
    return (
        <ImageGalleryWrapper>
            <div>
                <Image fluid={images[0].localFile.childImageSharp.fluid} />
            </div>
        </ImageGalleryWrapper>

    )
}

//fluid: About size of images when changing width.