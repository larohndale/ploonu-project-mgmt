const express = require('express');
require('dotenv').config();
// const { createHandler } = require('graphql-http/lib/use/express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const port = process.env.PORT || 5000;
const app = express();

// app.all('/graphql', createHandler({ schema }));
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Ploonu server running on ${port}`));
