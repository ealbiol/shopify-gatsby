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

  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({ //createPage is a reserved word from gatsby to create pages.
      path: `products/${node.handle}`, //Route generator for each product taking as name the value of 'handle' (its like the slug)
      context: {
        shopifyId: node.shopifyId
      },
      component: path.resolve("./src/templates/ProductTemplate/index.js") //The component to render this page. As we aren't inside the src (we are at environment level)
      //we can't import a component so that is why we are giving the path (route) that works as an import. Path. works as an import.
    })
  })
}
