const path = require("path");
exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;

  const aboutTemplate = path.resolve(`src/templates/about.js`);
  const ministryTemplate = path.resolve(`src/templates/ministry.js`);
  const mediaTemplate = path.resolve("src/templates/media.js");

  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
           
      if (node.frontmatter.type === "About"){
        createPage({
          path: `/about/${node.frontmatter.path}/`,
          component: aboutTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.type === "Ministry") {
        createPage({
          path: `/ministry/${node.frontmatter.path}/`,
          component: ministryTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
      if (node.frontmatter.type === "Media") {
        createPage({
          path: `/media/${node.frontmatter.path}`,
          component: mediaTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
    });
  });
};