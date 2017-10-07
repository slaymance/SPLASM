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
		var userId = req.session.passport.user;
		// var userId = 3;
		User.findOne({where: {id: userId}})
		.then(sessionUser => {
			console.log('found ', sessionUser);
			var username = req.params.username;
			User.findOne({where: {name: username}})
			.then(profileUser => {
				sessionUser.addFriend(profileUser)
				.then((res) => {
					console.log(res);
					res.status(201).send('ok');
				}).catch((err) => {
					res.send(err);
				})
				// if 2 way auto-friendships desired
				// just add another line like above.
			}).catch(err => {
				console.error('deep err: ', err);
				res.send('something goofed deep within');
			})
		}).catch(err => {
			console.error('err', err);
			res.send('something goofed');
		})
	}
}

module.exports = friends;