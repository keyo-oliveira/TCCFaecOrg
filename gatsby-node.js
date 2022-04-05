/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const publicAgent = {
    cnpj: "12157159000199",
    organization: "Policia militar",
    actArea: "150",
    name: "34-DP",
    cep: "12942070",
    street: " R. Prof. João Antônio Rodrigues",
    number: "95",
    district: "Vila Thais",
    username: "user",
    password: "password",
  };
  const PublicAgentnode = {
    ...publicAgent,
    id: createNodeId(`PublicAgent${publicAgent.organizationId}`),
    internal: {
      type: "PublicAgent",
      contentDigest: createContentDigest(publicAgent),
    },
  };
  actions.createNode(PublicAgentnode);
};

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
        allOcurrencysJson {
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
  data.data.allOcurrencysJson.nodes.forEach((node) => {
    createPage({
      path: `/ocurrency/${node.ocurrencyId}/`,
      component: ocurrencyTemplate,
      context: {
        slug: node.ocurrencyId,
      },
    });
  });
};
