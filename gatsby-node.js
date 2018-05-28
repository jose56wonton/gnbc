const path = require("path");
const stringToUrl = require('./src/utils').stringToUrl;
exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;

  const detailTemplate = path.resolve(`src/templates/detail.js`);
  const ministryTemplate = path.resolve(`src/templates/ministry.js`);
  const peopleTemplate = path.resolve(`src/templates/people.js`);
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
      allContentfulMinistry{
        edges {
          node {
            title            
          }
        }
      } 
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    
    result.data.allContentfulMessage.edges.forEach(({node}) => {
      const messagePath = stringToUrl(node.title);
      createPage({
        path: `/media/${messagePath}`,
        component: messageTemplate,
        context: {
          title: node.title
        },
        title: node.title
      });
    })
    result.data.allContentfulMinistry.edges.forEach(({node})=>{
      const ministryPath = stringToUrl(node.title);
        createPage({
          path: `/ministry/${ministryPath}/`,
          component: ministryTemplate,
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

    });
  });
};