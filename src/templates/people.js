import React from "react";
import Helmet from "react-helmet";



export default function Template({ data }) {

  const {frontmatter} = data.markdownRemark;

  const staffElements = data.markdownRemark.frontmatter.people.map((person,i) => {

    console.log(person.childMarkdownRemark.frontmatter)


    return <div className="column is-4-desktop is-6-tablet is-12-mobile">
      <h1>{person.childMarkdownRemark.frontmatter.title}</h1>
      <img src={person.childMarkdownRemark.frontmatter.image.publicURL}/>
      <h1>{person.childMarkdownRemark.frontmatter.name}</h1>
      <p>{person.childMarkdownRemark.frontmatter.description}</p>
    </div>
  })

  
  return (
      <div>
      <Helmet title={`${frontmatter.type} - ${frontmatter.title}`} />
        <h1>{frontmatter.title}</h1>
        <div className="columns">
          {staffElements}        
        </div>
      </div>
  );
}
export const PeoplePathQuery = graphql`
  query PeoplePath($name: String!) {
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      html
      frontmatter {
        type 
        path
        title
        people{
          publicURL
          childMarkdownRemark{
            frontmatter{
              title
              name
              email
              description
              image{
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
;