/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { Component } = require("react");

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

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(
    `
      {
        allOcurrencyJson {
          nodes {
            ocurrencyId
          }
        }
      }
    `
  );

  if (data.error) {
    console.log("Error retrieving data", data.error);
    return;
  }

  const ocurrencyTemplate = require.resolve("./src/pages/ocurrency.tsx");

  data.data.allOcurrencyJson.nodes.forEach((node) => {
    createPage({
      path: `/ocurrency/${node.ocurrencyId}/`,
      component: ocurrencyTemplate,
      context: {
        slug: node.ocurrencyId,
      },
    });
  });
};
