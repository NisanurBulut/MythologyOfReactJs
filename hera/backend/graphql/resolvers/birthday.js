const Birthday = require('../../models/Birthday');

module.exports = {
  Query: {
    async getBirthdays() {
      try {
        const birthdays = await Birthday.find().sort({ age: -1 });
        return birthdays;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
