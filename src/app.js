const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const Schema = require ('./schema')
const { PORT } = require ('./utils/constant');
const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema: Schema
    }),
  );

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`GATEWAY LISTENING ON PORT ${PORT}`);
// });

module.exports = app;
