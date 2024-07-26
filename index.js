const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphQL/index');

// Create an Apollo server instance
const server = new ApolloServer({ typeDefs, resolvers }); 

// Initialize an Express application
const app = express();

//Mongodb
require('./dbs/Mongo')

// Apply the Apollo GraphQL middleware to the Express application
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});