const { projects, clients } = require('../sampleData.js');
// const grahpql = require('graphql');
// const { } = grahpql;
// Save time by intializing it like seen below
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

// Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

/*
 Root query object to get data takes in the fields such as client and its type, args are what we need for additional data like the client id,
 resolve takes in the parent and arguments and this is where we want to return our data, (later retrieve from db)
*/
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
  },
});

// Export the query to use it later (in the index.js)
module.exports = new GraphQLSchema({
  query: RootQuery,
});
