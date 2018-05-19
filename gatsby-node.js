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
        console.log("calendar")
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
        console.log("detail")
        createPage({
          path: `/about/${node.frontmatter.path}/`,
          component: detailTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.type === "Ministry") {
        console.log("ministry")
        createPage({
          path: `/ministry/${node.frontmatter.path}/`,
          component: ministryTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
      if (node.frontmatter.type === "People") {
        console.log("people")
        createPage({
          path: `/about/${node.frontmatter.path}`,
          component: peopleTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.type === "Sermon") {
        console.log("sermon")
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