// A L L   P R O D U C T S   P A G E

import React from "react"
import { Layout, Filters, ProductsGrid } from "components"
import ProductContext from "../context/ProductContext"
import styled from "styled-components"

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

    const collectionProductMap = {}


    if (collections) { //'if' just to check if ciollections have value.

        //1.
        //For each collection we want to assign an id that will be stored to 'collectionProductMap'.
        collections.forEach(collection => {
            collectionProductMap[collection.shopifyId] = {}; // {collectionId1, collectionId2, ...} / With '={}' we are saying that the 'collectionId' will have one ore more values inside. In this case the productId 

            //Loop through products of each collection:
            collection.products.forEach(product => {
                collectionProductMap[collection.shopifyId][product.shopifyId] = true //{collectionId1: productId1=true, productId2=true, ...} / The [] after another [] means that the second [] is the data inside the object. In this case collection will have inside the products.
            })
        })

    }

    console.log("---> collectionProductMap: ", collectionProductMap);

    const filterByCategory = (product) => {

    } //It's within this function where we want to return whether the category matches our category or not.

    const filteredProducts = products.filter(filterByCategory)

    return (
        <Layout>
            <h4>{products.length} products</h4>
            <Content> {/* styled component created on top of this page component. */}
                <Filters />
                <div>
                    <ProductsGrid products={products} /> {/* We reuse the ProductsGrid component and we pass/send the products prop to the child component. */}
                </div>
            </Content>

        </Layout>
    )
}


/*
We want to filter out products if they don't match any of the categories that we have
selected to filter.


1. The content of 'collectionProductMap':

///////////////////////////////////////////////////////////////////
///-***** C R E A T I N G   D Y N A M I C   O B J E C T S *****-///
///////////////////////////////////////////////////////////////////

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
*/