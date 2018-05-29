import React,{Component} from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import PeopleTile from '../../components/people/peopleTile';

class Staff extends Component {
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
            pathPrefix="/about/staff/"
          />
        );
      }
    );
  }
  render() {
    console.log(this.props.data);
    const peopleElements = this.mapPeopleToTiles();
    
    return (
      <div>
        <Helmet title={`About - Staff`} />
        <div className="navbar-spacer" />
        <div className="container">
          <div className="columns">
            <div className="column is-offset-2 is-8">              
              <h1 className="title-1" >Staff</h1>
              <div className="columns  is-multiline">{peopleElements}</div>
            </div>
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
            sizes(maxWidth: 300,quality: 90){
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