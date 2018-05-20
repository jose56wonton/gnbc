import React from "react";
import Helmet from "react-helmet";

export default function Template({ data }) {
  const { frontmatter } = data.markdownRemark;
  return (
    <div>
      <Helmet title={`Contact`} />
      <div>
        <h1>{frontmatter.title}</h1>
      </div>
    </div>
  );
}
export const ContactPathQuery = graphql`
  query ContactPath($name: String!) {
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      html
      frontmatter {
        type
        path
        title
      }
    }
  }
`;
