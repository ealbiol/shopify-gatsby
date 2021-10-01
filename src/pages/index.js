import React from 'react';
import { Layout, SEO } from 'components';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {

  const { collections } = React.useContext(ProductContext)
  console.log("---> Collections:", collections);
  return (
    <Layout>

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
