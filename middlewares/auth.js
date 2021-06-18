
var jbt = require('jsonwebtoken');
var User = require('../repositories/user')

module.exports = function(req, res, next) {

	if(!req.body.token)
		return res.status(403).send({
			message: 'Access denied'
		});

	// verify the token
	jbt.verify(req.body.token, 'ismykey', async function(err, decoded){
		if(!err) {
			// get user from database with decoded id
			var user = await User.getUser(decoded.id);

			if(user) {
				req.user = user;
				return next();
			}
		}

		return res.status(403).send({
			message: 'Access denied'
		});
	})
}