import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import PeopleTile from '../../components/about/peopleTile';

class Staff extends Component {
  mapPeopleToTiles = () => {
    return this.props.data.allContentfulPerson.edges.map(
      (person, i) => {
        
        const {
          image,
          name
        } = person.node;
        console.log(image,name);
        return (
          <div>

            nice
            <PeopleTile
            key={i * Math.random() * 56}
            image={image}
            name={name}
            type="staff"
          />
          </div>
          
        );
      }
    );
  }
  render() {
    console.log(this.props.data);
    const peopleElements = this.mapPeopleToTiles();
    console.log(peopleElements)
    return (
      <div className="staff">
        <Helmet title={`About - Staff`} />
        <div className="navbar-spacer" />
        <div className="container">
          <div className="column is-10 is-offset-1">
            <div className="people-header">
              <h1 className="title-1">Staff</h1>
            </div>
            <div className="columns is-multiline">{peopleElements}</div>
          </div>
        </div>

      </div>

    );
  }
}

export default Staff;

export const StaffPathQuery = graphql`
  query StaffPath{
    allContentfulPerson(filter: {local: {eq:true}}){
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