const { GraphQLString, GraphQLObjectType, GraphQLID } = require('graphql/type');


const UrlType = new GraphQLObjectType({
    name: 'UrlType',
    description: 'Url object',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID of Url'
        },
        short_code: {
            type: GraphQLString,
            description: 'Short Url Code',
        },
        short_url: {
            type: GraphQLString,
            description: 'Short Url',
        },
        long_url: {
            type: GraphQLString,
            description: 'Long Url',
        },
        created: {
            type: GraphQLString,
            description: 'Date created',
        },
    })
});

module.exports = { UrlType }; 