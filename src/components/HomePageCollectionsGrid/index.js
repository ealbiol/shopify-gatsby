import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections } from "./styles"
import { StyledLink } from "../StyledLink" //Importing styled Link to be able to add links.

export function HomePageCollectionsdGrid({ collections }) { //Receiving collections from parent 'index.js' from folder 'Pages'. 
    //We split the data of collections so that in 'saleCollection' we only get the SALE collection
    //and in remainingCollections we get the rest.
    const saleCollection = collections.find(collection => collection.title === "SALE") //Getting only the SALE collection with a find method.
    const remainingCollections = collections.filter(collection => collection.title !== "SALE")

    return (
        <div>
            {/* SALE COLLECTION: Conditional for if saleCollection exists.*/}
            {!!saleCollection &&
                <CollectionTile
                    sale // "sale" prop === true.
                    destination={`/all-products?c=${encodeURIComponent(saleCollection.shopifyId)}`} //prop link to collection
                    title={saleCollection.title} //We render the saleCollection. No map needed as it is only one collection.
                    description={saleCollection.description}
                    backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
                />
            }

            <RemainingCollections> {/*Styled Component created. Its not the const from above.*/}
                {/* REMAINING COLLECTIONS: Applying a .map loop */}
                {
                    remainingCollections.map(collection => {
                        return (
                            <CollectionTile
                                destination={`/all-products?c=${encodeURIComponent(collection.shopifyId)}`} //prop link to collection
                                title={collection.title} //1.
                                description={collection.description}
                                backgroundImage={collection.image.localFile.childImageSharp.fluid}
                                key={collection.shopifyId} //Just needed to avoid map child error.
                            />
                        )
                    })
                }
            </RemainingCollections>


        </div>
    )
}


/*
SALE TILE:
saleCollection: We issolate the SALE collection with a find method.
The logic in the find is to find a collection within 'collections' whose colleciton.title is equal to "SALE".

REMAINING COLLECTIONS:
remainingCollections: We filter from our 'collections' for those collections whose collection.title is not equal to "SALE".
The filter method gives us back all that is stated in the condition. In this case all collections where its collection.title
is not equal to "SALE".
*/

/*
EXPLANATION:

1. Here we are sending the collection.title to the child component 'CollectionTile'.
collection.title comes from 'collections' and we are receiving 'collections' from index.js of Pages.
Therefore we already have all the data from collections.
Summary:

- In index.js from Pages we get the collections importing them from the ProductContext
and destructuring it.

- From index.js from Pages we send 'collections' to the component HomePageCollectionsGrid (here).
- Here we receive it and use it in a .map BUT one for saleCollection and another one for remainingCollection.

- Here we are sending the 'collection.title' within the loop to the component CollectionTile.
- CollectionTile will be receiving it as a prop 'title'.
- We are sending as well 'description', 'backgroundImage'.
*/


/*
'sale' PROP:

Objective of this prop: The objective of this prop is to give a special red style to the
title and description text.

To do that we give a 'sale' prop to the CollectionTile of that renders the sale CollectionTile.
We pass it just like that 'sale' since that way it gives it a boolean true value. This prop is being
sent to the child 'CollectionTile'.

On index.js from CollectionTile we receive the prop 'sale' and we add it to the title and description:
 <Title sale={sale} >{title}</Title>
 <Description sale={sale} >{description}</Description>

 KEY: On styles.js from CollectionTile is where the logic happens:
 - There we add a ternary operator that establishes the following:

 background: ${props => props.sale ? "red" : "none"}

 This means: if the CollectionTile component has a 'sale' prop (WE ONLY GAVE IT TO
    THE COLLECTIONTILE component that renders the 'sale' collection) then get a red
    background. Otherwise no background.

*/




/*
Succesful trying out:

 <div>
            <div>{collections[0]?.title}</div>
            <div>{collections[0]?.products[1]?.title}</div>
        </div>
*/




