/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/index/)) {
    page.matchPath = `/index/*`;

    // Update the page.
    createPage(page);
  }
};

exports.createPage = async({actions: {createPage}, graphql}) => {
  const data = await graphql(
    ``
  )
}