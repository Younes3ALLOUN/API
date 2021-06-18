
var User 	= require ('../repositories/user');
var jbt 	= require('jsonwebtoken');

module.exports = function (router) {
	router.post('/auth', async function(req, res){
		// data validation
		var user = await User.getUserByEmail(req.body.email);

		if(user) {
			if(user.password == req.body.password) {
				var token = jbt.sign({id: user.id}, 'ismykey');
				return res.status(200).send({
					message: 'Auth success',
					token: token
				})
			}
		}

		return res.status(400).send({
				message: 'Email or password is incorrect'
		});
	});
}