const express = require('express');
require('dotenv').config();
// const { createHandler } = require('graphql-http/lib/use/express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// MongoDB Require
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;


const app = express();

// Conntect to DB
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Ploonu server running on ${port}`));
