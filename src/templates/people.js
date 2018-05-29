import Helmet from "react-helmet";

import Tile from "../components/people/tile";
import React, { Component } from "react";

class People extends Component {

  mapPeopleToTiles = () => {
    return this.props.data.markdownRemark.frontmatter.people.map(
      (person, i) => {
        const {
          image,
          title,
          name,
          description
        } = person.childMarkdownRemark.frontmatter;
        return (
          <Tile
            key={image.childImageSharp.sizes.base64}
            imageSizes={image.childImageSharp.sizes}
            title={title}
            name={name}
            description={description}
          />
        );
      }
    );
  }
  render() {

    const { frontmatter } = this.props.data.markdownRemark;

    const staffElements = this.mapPeopleToTiles(); 

    return (
      <div className="columns">
        <div className="column is-offset-2 is-8">
          <Helmet title={`${frontmatter.type} - ${frontmatter.title}`} />
          <h1 className="title-1" >{frontmatter.title}</h1>
          <div className="columns  is-multiline">{staffElements}</div>
        </div>
      </div>
    );
  }
}

export default People;

// export const PeoplePathQuery = graphql`
//   query PeoplePath($name: String!) {
//     markdownRemark(frontmatter: { path: { eq: $name } }) {
//       html
//       frontmatter {
//         type
//         path
//         title
//         people {
//           publicURL
//           childMarkdownRemark {
//             frontmatter {
//               title
//               name
//               email
//               description
//               image {
//                 childImageSharp {
//                   sizes {
//                     ...GatsbyImageSharpSizes
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
