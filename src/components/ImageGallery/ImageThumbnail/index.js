import React from "react";
import Image from "gatsby-image"
import { ImageThumbnailWrapper } from "./styles"

export default function ImageThumbnail({ isActive, onClick99, image }) { //Receiving/Passing 3 props from index.js of ImageGallery

    const handleClick2 = () => {
        onClick99(image)
    }

    return (
        <ImageThumbnailWrapper onClick={handleClick2}> {/* //3. */}
            <Image fluid={image.localFile.childImageSharp.fluid} />
        </ImageThumbnailWrapper>
    )
}


//3. Cuando el usuario hace click en el thumbnail se ejecuta la función handleClick2 y eso llama a la función onClick99 (recibida como props) y le pasamos la imagen 'image' recibida por props.
//Esta props 'image' es la misma que se está usando en image.localFile...