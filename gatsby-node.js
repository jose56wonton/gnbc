const path = require("path");
const stringToUrl = require('./src/utils').stringToUrl;
exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;

  const detailTemplate = path.resolve(`src/templates/detail.js`);
  const ministryTemplate = path.resolve(`src/templates/ministry.js`);
  const peopleTemplate = path.resolve(`src/templates/people.js`);
  const mediaTemplate = path.resolve("src/templates/media.js");
  const contactTemplate = path.resolve("src/templates/contact.js");
  const messageTemplate = path.resolve("src/templates/message.js");
  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
              title 
              date
              templateType
            }
          }
        }
      }
      allContentfulMessage {
        edges {
          node {
            title
            date
          }
        }
      } 
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    
    result.data.allContentfulMessage.edges.forEach(({node}) => {
      console.log(node)
      const messagePath = stringToUrl(node.title);
      console.log(node.title)
      createPage({
        path: `/media/${messagePath}`,
        component: messageTemplate,
        context: {
          title: node.title
        },
        title: node.title
      });
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      
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

      if (node.frontmatter.templateType === "Media") {
        createPage({
          path: `/${node.frontmatter.path}`,
          component: mediaTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
     

      if (node.frontmatter.templateType === "Contact") {
        createPage({
          path: `/${node.frontmatter.path}`,
          component: contactTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
    });
  });
};