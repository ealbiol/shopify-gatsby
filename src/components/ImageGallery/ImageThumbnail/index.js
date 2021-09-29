import React from "react";
import Image from "gatsby-image"
import { ImageThumbnailWrapper } from "./styles"

export default function ImageThumbnail({ isActive, onClick99, image }) { //Receiving/Passing 3 props from index.js of ImageGallery

    const handleClick2 = () => {
        onClick99(image)
    }

    return (
        <ImageThumbnailWrapper onClick={handleClick2} isActiveD={isActive} > {/* //3. */}
            <Image fluid={image.localFile.childImageSharp.fluid} />
        </ImageThumbnailWrapper>
    )
}


/* ONCLICK EXPLANATION:
Happening between index.js from 'ImageGallery' and index.js from 'ImageThumbnail'
1. Para cada thumbnail se establece una propiedad 'onClick99' que dentro contiene la función 'handleClick'.
2. Cuando la función 'handleClick' sea llamada recoge un parámetro llamado 'image' y actualiza el estado de react (activateImageThumbnail).
3. Cuando el usuario hace click en el thumbnail se ejecuta la función handleClick2 y eso llama a la función onClick99 (recibida como props) y le pasamos la imagen 'image' recibida por props.
Esta props 'image' es la misma que se está usando en image.localFile...
*/

/* isActive PROP EXPLANATION:

On the file index.js from ImageGallery: we create the following prop:
isActive={activeImageThumbnail.id === imageD.id}

With this prop we establish that the prop 'isActive' is true when the following condition: the main
image id (activeImageThumbnail is the useState big image) and the imageD are the same.

"If the activeImageThumbnail.id is equal to this particular imageD.id then obviously this particular
image thumbnail is active."



On the file index.js from ImageThumbnal: we are receiving the prop isActive and adding it to the component ImageThumbnailWrapper:
<ImageThumbnailWrapper onClick={handleClick2} isActiveD={isActive} >
When adding it as a prop to the ImageThumbnailWrapper we need to give it a name otherwise it sets that all thumbnails
are true and therefore all will have the blue frame. To make it more understandable I called it 'isActiveD'.
so that we don't have isActive={isActive} which can be confusing.
This will mean that when the condition of isActive takes place the styles that we add to isActive (blue frame)
will take place.

In styles.js of ImageThumbnail:
With stypedComponents with are establishing that the frame color of the border will be blue if
the prop 'isActiveD' is received (we sent it to the ImageThumbnailWrapper on index.js of ImageThumbnail)
and the condition of 'isActive' is true. If it is not true the ternary operator will send back the color
#eee which is gray.
*/