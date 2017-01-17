const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers');

const typeDefs = `
type User {
    id: Int!
    firstName: String
    lastName: String
}
# the schema allows the following query:
type Query {
    users: [User]
    user(id: ID!): User
}
`;

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers,
});
