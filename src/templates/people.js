import React from "react";
import Helmet from "react-helmet";

export default function Template({ data }) {
  const { frontmatter } = data.markdownRemark;

  const staffElements = data.markdownRemark.frontmatter.people.map(
    (person, i) => {
      console.log(person.childMarkdownRemark.frontmatter.publicURL);

      return (
        <div className="column is-6-desktop is-12-mobile people-tile">          
          <div className="people-cover">
            <img
              className="people-image"
              src={person.childMarkdownRemark.frontmatter.image.publicURL}
            />
          </div>
          <div className="people-content">
            <h2 className="title-2">{person.childMarkdownRemark.frontmatter.title}</h2>
            <h1 className="title-1">{person.childMarkdownRemark.frontmatter.name}</h1>
            <p className="text">{person.childMarkdownRemark.frontmatter.description}</p>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="columns">
      <div className="column is-offset-2 is-8">
        <Helmet title={`${frontmatter.type} - ${frontmatter.title}`} />
        <h1>{frontmatter.title}</h1>
        <div className="columns  is-multiline">{staffElements}</div>
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
        people {
          publicURL
          childMarkdownRemark {
            frontmatter {
              title
              name
              email
              description
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;
