// const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require ('graphql/type');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull} = graphql

const {UrlSchema, UrlType, createShortUrl} = require('./url');


const query = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    AllUrl: {type: GraphQLString}
  },
});



const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    CreateUrlShortner: {
      type: UrlType,
      args: {
        url: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve: (root, args) => createShortUrl(args)
    }
  },
});


module.exports = new GraphQLSchema({
    query,
    mutation: mutation
})
