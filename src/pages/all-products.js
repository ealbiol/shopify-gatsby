// A L L   P R O D U C T S   P A G E

import React from "react"
import { Layout, Filters, ProductsGrid, SEO } from "components"
import ProductContext from "../context/ProductContext"
import styled from "styled-components"
import queryString from "query-string"
import { useLocation } from "@reach/router"

//We don't create a styles.js file for this component as in gatsby within pages we can't
//add anything other than pages. That's the reason we create the styled component here.
const Content = styled.div`
display: grid;
grid-gap: 20px;
margin-top: 20px;
grid-template-columns: 1fr 3fr;
`




export default function AllProducts() {

    const { products, collections } = React.useContext(ProductContext) //Destructuring products and collections to be able to use them.
    console.log("---> Products:", products);

    //A)
    const collectionProductMap = {}




    //B)
    const { search } = useLocation();
    const qs = queryString.parse(search)
    const selectedCollectionIds = qs.c?.split(",").filter(c => !!c) || []; //Getting collection id's from URL.

    //B)
    // We fill the const 'selectedCollectionIdsMap' with the collection id's from the URL.
    const selectedCollectionIdsMap = {};

    //C)
    const searchTerm = qs.s; //We take the 'searchTerm' from the URL.

    selectedCollectionIds.forEach(collectionId => {
        selectedCollectionIdsMap[collectionId] = true
    });

    //A)
    if (collections) { //'if' just to check if ciollections have value.

        //1. For each collection we want to assign an id that will be stored to 'collectionProductMap'.
        collections.forEach(collection => {
            collectionProductMap[collection.shopifyId] = {}; // {collectionId1, collectionId2, ...} / With '={}' we are saying that the 'collectionId' will have one ore more values inside. In this case the productId 

            //Loop through products of each collection:
            collection.products.forEach(product => {
                collectionProductMap[collection.shopifyId][product.shopifyId] = true //{collectionId1: productId1=true, productId2=true, ...} / The [] after another [] means that the second [] is the data inside the object. In this case collection will have inside the products.
            })
        })

    }

    console.log("---> collectionProductMap: ", collectionProductMap);

    //B) Important!!
    const filterByCategory = (product) => {

        if (Object.keys(selectedCollectionIdsMap).length) { //Checking that we have content by checking how many collection id's in the url we have.
            for (let key in selectedCollectionIdsMap) { //Iterate through all collection id's we got from the url.
                if (collectionProductMap[key]?.[product.shopifyId]) { //IMPORTANT: go to explanation below.
                    return true
                }
            }
            return false;
        }

        return true;

    } //It's within this function where we want to return whether the category matches our category or not.


    const filterBySearchTerm = product => {
        if (searchTerm) {
            return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
            //We convert the title of the product and the searchTerm to lower case.
            //What this line does: We are gonna return the product if there is a searchTerm and if there is a searchTerm that is part of the product.title
            //It returns all the values that contain searchTerm since with the .filter it iterates through all product.title's.
        }
        return true
    };

    console.log("---> searchTerm", searchTerm);

    const filteredProducts = products
        .filter(filterByCategory)
        .filter(filterBySearchTerm)




    return (
        <Layout>
            <SEO title="All products" description={"The MadHatter store all products"} />

            {/* If there is a searchTerm and filteredProducts (remember we returned true if no checknox pressed) we render the searchTerm. E.G: 'Search term 'hat'. */}
            {!!searchTerm && !!filteredProducts.length && (
                <h3>
                    Search term <strong>'{searchTerm}'</strong>
                </h3>
            )}

            {/* If there are filteredProducts (remember we returned true if no checknox pressed) return the amount of products.*/}
            {!!filteredProducts.length &&
                <h4>{filteredProducts.length} products</h4>
            }

            <Content> {/* styled component created on top of this page component. */}
                <Filters />
                {!filteredProducts.length && //Message if there are no filtered products because of the searchItem === 0. E.G: ewrtwef
                    <div>
                        <h3>
                            <span>
                                Oh no! Nothing matches
                            </span>
                            &nbsp;
                            <strong>
                                '{searchTerm}'
                            </strong>
                        </h3>
                        <div>
                            To help with your search why not try:
                            <br />
                            <br />
                            <ul>
                                <li>
                                    Checking your spelling
                                </li>
                                <li>
                                    Using less words
                                </li>
                                <li>
                                    Try using a different search term
                                </li>
                            </ul>
                        </div>
                    </div>
                }
                {!!filteredProducts.length && ( //Rendering if there are filtered products. Remember no checkbox marked also returns true and therefore the all the products.
                    <div>
                        <ProductsGrid products={filteredProducts} /> {/* We send as value the collections present in the URL. If none we set to send it all (return true) */}
                    </div>
                )}

            </Content>

        </Layout>
    )
}


/*
We want to filter out products if they don't match any of the categories that we have
selected to filter.

A) Fill the collectionProductMap with collectionsId and productsId of each collection.
B) Get the URL or URL's that are checked.
C) We add the searchTerm.



-----------> A) Fill the collectionProductMap with collectionsId and productsId of each collection.

///////////////////////////////////////////////////////////////////
///-***** C R E A T I N G   D Y N A M I C   O B J E C T S *****-///
///////////////////////////////////////////////////////////////////

1. The content of 'collectionProductMap':
It contains an object with objects inside. The objects inside are the shopifyId's of
each collection.

Each collection shopifyId has inside a list of the id's of its products and an equal to true.

E.G:

{
    'collection1Id': {'product1Id': true, 'product2Id': true, 'product3Id': true},
    'collection2Id': {'product1Id': true, 'product2Id': true, 'product3Id': true},
    'collection3Id': {'product1Id': true, 'product2Id': true, 'product3Id': true},
    'collection4Id': {'product1Id': true, 'product2Id': true, 'product3Id': true}
}

- WHY WE WANT THIS STRUCTURE? The reason we want it to look like this is that we can easily check if a particular
  product belongs to a specific collection by going:



- KEY CONCEPT: Explanation of the 2 [][]:
    The [] after another [] means that the second [] is the data inside the object.
    In this case collection will have inside the products. As we are in a forEach this means that
    ---> E.G: collectionMap[collectionId][productId]


- KEY CONCEPT: Explanation of the '={}':
    - In order to be able store data inside of an object we need to create that room for it.
    - E.G: collectionProductMap[collection.shopifyId] = {};
    - In this case we will want to store products inside each collection (the [][]). If we don't
      give it an space before there will be no room to allocate the products.
    - What we are doing is giving it space to allocate products in the next forEach.
    - We are doing this: 'collection2Id': {},
    - The same happened with 'const collectionProductMap = {}'. We created a space for the collections id
      to be inside.



- Flow in the forEach loop:
     - collections.forEach() loop: It stores inside collectionProductMap 'collection1Id'
     ---> goes down to the second forEach inside the first forEach.
     - collection.products.forEach() loop: We are in collection1 and we add inside of it
     its products.

     {
       Step 1. 'collection1Id'                                                                    <--- In first forEach collection1Id is stored.
       Step 2. 'collection1Id': {'product1Id': true}                                              <--- In second forEach (inside first forEach) product1Id is stored.
       Step 3. 'collection1Id': {'product1Id': true, 'product2Id': true}                          <--- In second forEach (inside first forEach) product2Id is stored.
       Step 4. 'collection1Id': {'product1Id': true, 'product2Id': true, 'product3Id': true}      <--- In second forEach (inside first forEach) product3Id is stored.
     }

     . . .

     At the end we have all collectionsId with its productsId inside:

     {
    'collection1Id': {'product1Id': true, 'product2Id': true, 'product3Id': true},
    'collection2Id': {'product1Id': true, 'product2Id': true, 'product3Id': true},
    'collection3Id': {'product1Id': true, 'product2Id': true, 'product3Id': true},
    'collection4Id': {'product1Id': true, 'product2Id': true, 'product3Id': true}
     }


-----------> B) Get the URL or URL's that are checked:

In order to know which boxes are checked we need to take them from the URL. Since
remember that there the collection id's are stored when a checkbox is clicked.

- We import queryString and useLocation.
- Get 'search' destructured from useLocation
- Store the search under qs.
- We store all collection (the qs) id's we get from the url to a const
  called 'selectedCollectionIds'. It gets stored in an array.


- We fill the const 'selectedCollectionIdsMap' with the collection id's from the URL:

const selectedCollectionIdsMap = {};

selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true
});


Explanation of:
if (collectionProductMap[key]?.[product.shopifyId]) {

//IMPORTANT: We are in a filter iterating through each product. Then in the loop For we
 iterate through each collectionId form the url's. Then the 'if' starts iterating per
 product (because of the .filter) and per url collection (because of the For) and checks
 the following: if collectionId1 has inside productId4 then its equal true, and like this
 for all the rest. Remember that the .filter method only returns what is true.

 E.G:
if (collectionId1.productId4) {  <--- if productId4 is inside collectionId1 then its equal
    to true.




-----------> C) We add the searchTerm:
Filtering by 'searchTerm':

- We add this additional filter  right after the first one:

    const filteredProducts = products.filter(filterByCategory).filter(filterBySearchTerm)


- //We take the 'searchTerm' from the URL.
    const searchTerm = qs.s;

- We create the function 'filterBySearchTerm' with the product taking the product (remember
    wer are in a filter loop):

      const filterBySearchTerm = (product) => {
        if (searchTerm) {
            return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        }

    };

- We convert the title of the product and the searchTerm to lower case.
- What this line does: We are gonna return the product if there is a searchTerm
and if there is a searchTerm that is part of the product.title
- indexOf ends up returning all the values that contain searchTerm since with the .filter
it iterates through all product.title's.

*/