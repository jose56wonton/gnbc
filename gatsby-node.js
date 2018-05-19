const path = require("path");
exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;

  const calendarTemplate = path.resolve(`src/templates/calendar.js`);
  const detailTemplate = path.resolve(`src/templates/detail.js`);
  const ministryTemplate = path.resolve(`src/templates/ministry.js`);
  const peopleTemplate = path.resolve(`src/templates/people.js`);
  const sermonTemplate = path.resolve("src/templates/sermon.js");

  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
              title
              templateType
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
      
      if (node.frontmatter.templateType === "Calendar"){
        createPage({
          path: `/media/${node.frontmatter.path}/`,
          component: calendarTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.templateType === "Detail"){
        createPage({
          path: `/about/${node.frontmatter.path}/`,
          component: detailTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.templateType === "Ministry") {
        createPage({
          path: `/ministry/${node.frontmatter.path}/`,
          component: ministryTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
      if (node.frontmatter.templateType === "People") {
        createPage({
          path: `/about/${node.frontmatter.path}`,
          component: peopleTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.templateType === "Sermon") {
        createPage({
          path: `/media/${node.frontmatter.path}`,
          component: sermonTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
    });
  });
};