const { ApolloError } = require('apollo-server');
const mongoose = require('mongoose');

const server = new ApolloError({});

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
