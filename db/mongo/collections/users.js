var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
  name: {
    type: String,
    index: {
      unique: true
    }
  }
});

var UsersModel = mongoose.model('UsersModel', UsersSchema);

UsersModel.create({ name: 'TestUeser' }, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Saved entry!');
});

module.exports = UsersModel;