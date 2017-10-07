const Sequelize = require('sequelize');
const db = require('../../db/sql/index.js');
const User = require('../../db/sql/models/User.js');
const UserFriends = require('../../db/sql/models/UserToFriends.js');

const friends = {
	get: (req, res) => {
		// get a users friends list. all the people the user has added.
		var user = req.params.username;
		User.findOne({where: {name: user}}).then((userFetched) => {
			UserFriends.findAll({where: {userId: userFetched.id}})
			.then((fetchedFriends) => {
				res.json(fetchedFriends);
			})
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		});
	},

	post: (req, res) => {
		// hard code current user to me. then just api it.
		var userId = 2;
		// add a user to current users friends list.
		// get current username.
		// res.send(req.session.)		UserFriends.add();
		// userid: current
		// 
	}
}

module.exports = friends;