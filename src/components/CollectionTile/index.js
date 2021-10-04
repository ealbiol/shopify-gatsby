import React from 'react';
import { CollectionTileWrapper, CollectionTileContent, Title, Description } from "./styles"
import BackgroundImage from 'gatsby-background-image';

export function CollectionTile({ title, description, backgroundImage }) { //Receiving props from parent component 'HomePageCollectionsGrid'.
    return (
        <CollectionTileWrapper>
            <BackgroundImage fluid={backgroundImage} />
            <CollectionTileContent>
                <div>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </div>
            </CollectionTileContent>
        </CollectionTileWrapper>
    )
}

/*
BACKGROUND IMAGE COMPONENT FROM GATSBY:
Importing gatsby component 'BackgroundImage': It works similar to the image component.
In this course the professor has already added it so we just need to import it. Normally
you will have to install it.

To add the image we pass it as a prop called 'fluid' and then there we add the 'backgroundImage'
prop that we received from the parent component 'HomePageCollectionsGrid'.

Remember that in that component 'CollectionTile' is within a .map so therefore we get all titles,
descriptions, backgroundImages, etc.
*/