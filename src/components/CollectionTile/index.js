import React from 'react';

export function CollectionTile({ title, description, backgroundImage }) { //Receiving props from parent component 'HomePageCollectionsGrid'.
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}