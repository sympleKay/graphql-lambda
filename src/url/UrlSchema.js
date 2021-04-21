const { GraphQLString, GraphQLNonNull } = require('graphql/type');


const {UrlType, createShortUrl} = require ('./index');

const UrlSchema = {
  type: UrlType,
  args: {
    url: { 
      type: GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => createShortUrl(args)
}; 

module.exports = {UrlSchema};