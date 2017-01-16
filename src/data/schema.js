import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

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

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});
