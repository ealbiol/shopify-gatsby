const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};


//When exporting 'createPages' from gatsby-node.js will generate pages from what's inside the function.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions; //Destructuring to take 'createPage' from inside 'actions'.

  const { data } = await graphql(`
  query MyQuery {
    allShopifyProduct {
      edges {
        node {
          shopifyId
          handle
        }
      }
    }
  }  
  `)
  data.allShopifyProduct.edges.forEach(({ node }) => {      //FOR EACH:
    createPage({                                            //0. createPage is a reserved word from gatsby to create pages. What it does? CREATE A NEW PAGE with the following:
      path: `products/${node.handle}`,                      //1. Route/URL generator for each product taking as name the value of 'handle' (its like the slug). EX: http://localhost:8000/products/mens-fedora
      context: {
        shopifyId: node.shopifyId                           //Each page will have as a prop the shopifyId of the product.
      },
      component: path.resolve("./src/templates/ProductTemplate/index.js") //The component (template) to render this page (of each product). As we aren't inside the src (we are at environment level)
      //we can't import a component so that is why we are giving the path (route) that works as an import. Path. works as an import.
    })
  })
}


/*
PATH MODULE:

https://nodejs.org/api/path.html#path_path_resolve_paths


*/