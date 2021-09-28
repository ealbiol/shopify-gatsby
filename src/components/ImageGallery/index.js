import React from "react";
import Image from "gatsby-image"
import { ImageGalleryWrapper } from "./styles"
import ImageThumbnail from "./ImageThumbnail";

export function ImageGallery({ images }) {
    console.log("---> Images:", images);

    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(images[0])

    const handleClick = (imageToShow) => { //2.
        setActiveImageThumbnail(imageToShow)
    }

    return (
        <ImageGalleryWrapper>
            <div> {/* Main Image */}
                <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
            </div>

            <div> {/* Thumbnail Images */}
                {
                    images.map(imageD => {
                        return (
                            <ImageThumbnail key={imageD.id} image={imageD} onClick99={handleClick} /> //1.
                        )
                    })
                }
            </div>
        </ImageGalleryWrapper>

    )
}

//fluid: About size of images when changing width.

/*
1. Para cada thumbnail se establece una propiedad 'onClick99' que dentro contiene la función 'handleClick'.
2. Cuando la función 'handleClick' sea llamada recoge un parámetro llamado 'image' y actualiza el estado de react (activateImageThumbnail).
3. Cuando el usuario hace click en el thumbnail se ejecuta la función handleClick2 y eso llama a la función onClick99 (recibida como props) y le pasamos la imagen 'image' recibida por props.
Esta props 'image' es la misma que se está usando en image.localFile...
*/