const { ApolloServer, gql } = require('apollo-server-lambda');
const { RESTDataSource } = require('apollo-datasource-rest');
const { HOST_API } = require('./src/utils/constant');


class urlShortnerAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = HOST_API;
    }
  
    // POST
    async postUrl(url) {
      return this.post(`/api/shorten`,  {  longUrl: url });
    }
  
}
  

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type UrlType {
    _id: ID
    urlCode: String
    shortUrl: String
    longUrl: String
    createdAt: String
  }

  # Queries
  type Query {
    AllUrl: String
  }


  # Mutations
  type Mutation {
    CreateUrlShortner(url: String!): UrlType
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    AllUrl() {
        return 'Coming soon!!!'
    }
  },

  Mutation: {
    CreateUrlShortner: async (root, { url }, { dataSources }) => {
        return dataSources.urlShortnerAPI.postUrl(url)
    }
  }
};

// Initial server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => {
        return {
            urlShortnerAPI: new urlShortnerAPI()
        }
    }
});

exports.graphqlHandler = server.createHandler();
