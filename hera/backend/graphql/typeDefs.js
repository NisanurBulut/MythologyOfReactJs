const gql = require('graphql-tag');

module.exports = gql`
  type Birthday {
    id: ID!
    name: String!
    age: Int!
    imageUrl: String!
  }
  type Query {
    getBirthdays: [Birthday]
  }
`;
