import React from 'react';
import { CollectionTile } from '../CollectionTile';

export function HomePageCollectionsdGrid({ collections }) { //Receiving collections from parent 'index.js' from folder 'Pages'. 
    return (
        <div>
            {
                collections.map(collection => {
                    return (
                        <CollectionTile
                            title={collection.title} //1.
                            description={collection.description}
                            backgroundImage={collection.image.localFile.childImageSharp.fluid}
                            key={collection.shopifyId} />
                    )
                })
            }
        </div>
    )
}

/*
EXPLANATION:

1. Here we are sending the collection.title to the child component 'CollectionTile'.
collection.title comes from 'collections' and we are receiving 'collections' from index.js of Pages.
Therefore we already have all the data from collections.
Summary:

- In index.js from Pages we get the collections importing them from the ProductContext
and destructuring it.

- From index.js from Pages we send 'collections' to the component HomePageCollectionsGrid.
- Here we receive it and use it in a .map loop.

- Here we are sending the 'collection.title' within the loop to the component CollectionTile.
- CollectionTile will be receiving it as a prop 'title'.
- We are sending as well 'description', 'backgroundImage'.
*/


/*
Succesful trying out:

 <div>
            <div>{collections[0]?.title}</div>
            <div>{collections[0]?.products[1]?.title}</div>
        </div>
*/




