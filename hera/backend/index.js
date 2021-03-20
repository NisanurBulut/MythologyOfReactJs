const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const birthdayResolvers = require('./graphql/resolvers/index');
const { MONGO_DB } = require('./config.js');

const server = new ApolloServer({
  typeDefs,
  birthdayResolvers
});

mongoose
  .connect(
    `mongodb://127.0.0.1:27017/${MONGO_DB}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    server.listen({ port: 8000 }).then((res) => {
      console.log(`Server running at ${res.url}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
