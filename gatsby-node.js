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

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      AllOcurrency {
        Ocurrency {
          OcurrencyId
          OcurrencyType
          ManyEnvolved
          Victims
          GenerationDate
          Latitude
          Longitude
          City
          State
          Address
          Number
          Neighborhood
          Complement
          Details
          AnswerDate
          Caller
          AnsweredBy
          Dangerous
          Urgency
        }
      }
    }
  `);
  data.AllOcurrency.forEach((Ocurrency) => {
    const slug = Ocurrency.fields.OcurrencyId;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/components/OcurrencyList/index.tsx`),
      context: { slug: slug },
    });
  });
};
