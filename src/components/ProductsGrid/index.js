import React from "react";

export function ProductsGrid({ products }) { //Receiving products (of FeaturedCollection only as we applied a .find method) destructured from FeaturedProducts
    console.log("---> Products:", products);
    return (
        <section>
            {
                products.map(product => (
                    <div>{product.title}</div> //Rendering all the product titles from the Featured Hats collection.
                ))
            }
        </section>
    )
}

/*
EXPLANATION of ProductsGrid:

Here we are receiving the prop products from the parent component 'Featured Products'.
In the parent component we established that 'products' prop has as a value the
'FeaturedCollection' const. This const has inside the Featured Hats collection.

Since the collection 'Featured Hats' has several products we then apply a .map to render
the title of each one.
*/