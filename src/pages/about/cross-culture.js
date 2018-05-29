import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import PeopleTile from '../../components/people/peopleTile';

class CrossCulture extends Component {
  mapPeopleToTiles = () => {
    return this.props.data.allContentfulPerson.edges.map(
      (person, i) => {
        console.log(person.node);
        const {
          image,
          name
        } = person.node;
        return (
          <PeopleTile
            key={i * Math.random() * 56}
            image={image}
            name={name}
            type="cross-culture"
          />
        );
      }
    );
  }
  render() {
    console.log(this.props.data);
    const peopleElements = this.mapPeopleToTiles();

    return (
      <div className="cross-culture">
        <Helmet title={`About - Cross Culture`} />
        <div className="navbar-spacer" />
        <div className="container">
          <div className="column is-10 is-offset-1">
            <div className="people-header">
              <h1 className="title-1" >Cross Culture</h1>
            </div>
            <div className="columns is-multiline">{peopleElements}</div>
          </div>
        </div>

      </div>

    );
  }
}

export default CrossCulture;

export const CrossCulturePathQuery = graphql`
  query CrossCulturePath{
    allContentfulPerson(filter: {local: {eq:false}}){
      edges{
        node{
          name
          
          image{
            sizes(maxWidth: 600,quality: 90){
              ...GatsbyContentfulSizes
            }
          }
         
        }
      }
    }
  }
`;

// local
// role
// ministry{
//   title
// }
// description{
//   childMarkdownRemark{
//     html
//   }
// }