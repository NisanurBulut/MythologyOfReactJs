const Birthday = require('../../models/Birthday');

module.exports = {
  Query: {
    getBirthdays: async () => {
      try {
        const birthdays = await Birthday.find();
        return birthdays;
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createBirthday(parent, args) {
      try {
        const newBirthday = new Birthday({
          name: args.name,
          age: args.age,
          imageUrl: args.imageUrl,
        });
        const response = await newBirthday.save();
        console.log(response._doc);
        return {
          ...response._doc,
          _id: response._id.toString(),
        };
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
