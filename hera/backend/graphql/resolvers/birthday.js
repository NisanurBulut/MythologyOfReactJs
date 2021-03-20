const Birthday = require('../../models/Birthday');

module.exports = {
  Query: {
    async getBirthdays() {
      try {
        console.log('birthdays');
        const birthdays = await Birthday.find();
        return birthdays;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createBirthday({ name,age, imageUrl }) {
      console.log('createBirthday');
      try {
        const newBirthday = Birthday({
          name,
          imageUrl,
        });
        const response = await newBirthday.save();
        return {
          ...response._doc,
        };
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
