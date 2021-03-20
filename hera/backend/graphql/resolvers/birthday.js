const Birthday = require('../../models/Birthday');

module.exports = {
  Query: {
     getBirthdays:async()=>{
      debugger;
      try {
        console.debug('5');
        const birthdays = await Birthday.find();
        return {
          getBirthdays: birthdays.map((q) => {
            return {
              ...q._doc,
              _id: q._id.toString(),
            };
          }),
        };
      } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createBirthday({ name,age, imageUrl }) {
      console.log('createBirthday');
      try {
        const newBirthday = new Birthday({
          name,
          age,
          imageUrl,
        });
        const response = await newBirthday.save();
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
