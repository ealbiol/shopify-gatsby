import React from "react";
import Image from "gatsby-image"
import { ImageGalleryWrapper } from "./styles"
import ImageThumbnail from "./ImageThumbnail";

export function ImageGallery({ images }) { //Receiving prop from index.js of ProductTemplate index.js.
    console.log("---> Images:", images);
    return (
        <ImageGalleryWrapper>
            <div>
                <Image fluid={images[0].localFile.childImageSharp.fluid} /> {/* Using prop 'images' */}
            </div>
            <div>
                { }
            </div>
        </ImageGalleryWrapper>

    )
}

//fluid: About size of images when changing width.