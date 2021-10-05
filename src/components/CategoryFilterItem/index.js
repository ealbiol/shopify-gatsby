import React from "react"
import { CategoryFilterItemWrapper } from "./styles"
import { Checkbox } from "components"
import { navigate, useLocation } from "@reach/router" //2. and 4.
import queryString from "query-string" //4.

export function CategoryFilterItem({ title, id }) { //Receiving 'title' from parent component 'Filters'.

    const { search } = useLocation(); //5. Takes the URL after "?"
    const qs = queryString.parse(search) //6. Grabbing the URL we are in.
    const collectionId = qs.c; // 7. Saving the result under a const ('colletionId') + .c

    console.log("---> collectionId:", collectionId);
    console.log("---> id:", id);
    const whenClicking = () => {
        let navigateTo = "/all-products"

        navigate(`${navigateTo}?c=${encodeURIComponent(id)}`) //3.
    };

    return (
        <CategoryFilterItemWrapper onClick={whenClicking} > {/* 1. */}
            <Checkbox checked={collectionId === id} /> {/* 7. True if 'collectionId' is equal to 'id' */}
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


Go to index.js from Checbox to read ---> EXPLANATION CHECKBOX CHECKED AND UNCHECKED

After having read the checkbox index.js:

Now we want that when clicking on a checkbox it becomes black and the arrow appears.

4. We import 'queryString' from 'query-string' and useLocation from '@reach/router'.
5. We use 'search' from having destructured 'useLocation'. 'search' takes the URL
that comes after the '?' sign. We save that result under a variable called 'qs'.
6. We create a variable called 'collectionId' and its value is 'qs'.c  . The '.c' is added to use more than one parameter (several id's e.g.)
**Remember that the URL code is the shopifyId of a collection**

7. We pass/send the prop 'checked' to the Checkbox component with the following value inside:
<Checkbox checked={collectionId === id} />

This value means: when collectionId is equal to id then its TRUE. And when its not equal is FALSE.

Then we previously set on the Checkbox component that if the prop 'checked' then the checkbox
is black and with the arrow.

KEY: This the way to establish/connect the following: When the URL is equal to the id of the collection
then and only then we mark the checkbox black and with the arrow.

FINAL: So when we press for example 'Featured Hats' the URL of 'Featured Hats' (this URL is
    the shopifyId of the collection) the checkbox becomes black with the arrow.
    So we have the collection checked with its url on top.
*/