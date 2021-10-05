import React from "react"
import { CategoryFilterItemWrapper } from "./styles"
import { Checkbox } from "components"
import { navigate, useLocation } from "@reach/router" //2. and 4.
import queryString from "query-string" //4.

export function CategoryFilterItem({ title, id }) { //Receiving 'title' from parent component 'Filters'.

    const { search } = useLocation(); // Takes the URL after "?" E.G: search = c=1,3
    const qs = queryString.parse(search) // Grabbing the URL an converting it into JS object. E.G: qs = {c:"1,3"}
    const collectionIds = qs.c?.split(',').filter(c => !!c); // 7. Creating an array with each id. E.G: collectionIds = [1,3]. Split converts string to array with a given sign (,) as separator
    const checked = collectionIds?.find(cId => cId === id) // checked has content if cId equals id. And ture marks the checbox black

    console.log("---> qs:", qs);
    console.log("---> collectionIds:", collectionIds);
    console.log("---> id:", id);

    const whenClicking = () => {
        let navigateTo = "/all-products"


        let newIds = [];

        if (checked) {
            newIds = collectionIds.filter(cId => cId !== id)
                .map(cId => encodeURIComponent(cId))
        } else {
            collectionIds.push(id) // Adds clicked id's to collectionIds.
            newIds = collectionIds.map(cId => encodeURIComponent(cId))
        }

        navigate(`${navigateTo}?c=${newIds.join(',')}`) //3. E.G: [1,3] to "1,3". Converts array into string giving a specific separator (,)
    };

    return (
        <CategoryFilterItemWrapper onClick={whenClicking} > {/* 1. */}
            <Checkbox checked={checked} /> {/* 7. True if 'collectionId' is equal to 'id' */}
            <div>{title}</div>
        </CategoryFilterItemWrapper>
    )
}


/*
CHECKBOX ONCLICK EXPLANATION:

1. This component is each collection name and its checkbox since this component is added on its parent within
a loop map. So when we add an onClick function it gets added to each collection name and its checkbox.

This component on its parent on a .map loop:

collections.map(collection => (
                    <CategoryFilterItem


Use of the onClick: We want that when clicking we navigate to the URL of the collection.


2. We import the 'navigate' from reach/router. Within 'whenClicking' we create a variable that ontains the first part of the URL '/all-products'
3. We use the 'navigate' function to add the url where we are going to navigate to.
    - There we add the variable 'navigateTo' + ?c= + the 'id' we received from the parent that contains the shopify id of the collection (remember we are in a .map loop in the parent)
    - We use the 'encodeURIComponent' to remove any special characters of the shopifyId that aren't allowed on a URL.
This way we have a specific URL for each collection that is the mix of the 'navigateTo' and the shopifyId of the collection.



KEY: This the way to establish/connect the following: When the URL is equal to the id of the collection
then and only then we mark the checkbox black and with the arrow.

FINAL: So when we press for example 'Featured Hats' the URL of 'Featured Hats' (this URL is
    the shopifyId of the collection) the checkbox becomes black with the arrow.
    So we have the collection checked with its url on top.
*/

/* VIDEO 48
U P D A T E
ADDING SEVERAL ID'S TO THE URL:


A) const { search } = useLocation(); ---> all content after '?' is saved under 'search'.
    E.G: search = c=1,3

B) const qs = queryString.parse(search) ---> Grabbing the URL an converting it into JS object.
    E.G: qs = {c:"1,3"}

C) const collectionIds = qs.c?.split(',').filter(c => !!c); ---> Creating an array with each id.
    E.G: collectionIds = [1,3].
    Split converts string to array with a given sign (,) as separator.
    collectionsIds starts empty (obviously)

D) whenClicked:

    collectionIds.push(id) ---> Adds clicked id's to collectionIds.
    E.G: collectionIds = [1,3]

    const newIds = collectionIds.map(cId => encodeURIComponent(cId)) ---> We go through map to encodeURI all id's.

    navigate(`${navigateTo}?c=${newIds.join(',')}`) ---> Converts array into string giving a specific separator (,)
    E.G: [1,3] to "1,3"
    We navigate through the given url.

*/