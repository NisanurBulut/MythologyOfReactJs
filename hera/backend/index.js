const express = require('express');
const mongoose = require('mongoose');
const schema = require('./graphql/typeDefs');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const birthdayResolvers = require('./graphql/resolvers/birthday');
const { MONGO_DB } = require('./config.js');


const url = `mongodb://localhost:27017/${MONGO_DB}`;
const connect = mongoose.connect(url, { useNewUrlParser: true });
connect.then((db) => {
      console.log('Connected correctly to server!');
}, (err) => {
      console.log(err);
});

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: birthdayResolvers
});
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));