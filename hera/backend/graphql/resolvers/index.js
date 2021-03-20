const birthdayResolvers = require('./birthday');
module.exports = {
  Query: {
    ...birthdayResolvers.Query,
  },
};
