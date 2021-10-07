import React from 'react';
import { Layout, SEO, HomePageCollectionsdGrid, FeaturedProducts } from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {

  const { collections } = React.useContext(ProductContext)
  console.log("---> Collections:", collections);
  return (
    <Layout>
      {/* title is the text of the window tag of this page. */}
      <SEO title="Homepage" description={"The MadHatter store homepage"} />
      <HomePageCollectionsdGrid collections={collections.filter(collection => collection.title !== "Featured Hats")} />  {/* We establish that we want all collections whose collection.title is NOT equal to "Featured Hats". Therefore we get all of them but the Featured Hats one. */}


      {!!collections.find(collection => collection.title === "Featured Hats") && //Conditional: Render if within collections there is a collection.title equal to Featured Hats.
        <FeaturedProducts />
      }
    </Layout>
  )
}

export default IndexPage;

/* EXPLANATION OF HOW TO GET 'COLLECTIONS ARRAY':
Info about ProductContext on file ProductContext.

After having read that part:

- We import ProductContext and we take 'collections' by destructuring.
We did a console.log of 'collections' and you can see there an array for the collections.
*/

/*
We are passing/sending collections to the component but we want that the 'Featured Hats' collection
is not sent. In order to do that we apply a filter where we state that 'collection' will be
equal to all collections except the one whose collection.title is equal to "Featured Hats".

      <HomePageCollectionsdGrid collections={collections.filter(collection => collection.title !== "Featured Hats")} />

*/