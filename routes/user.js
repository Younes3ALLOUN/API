
const usersRepo = require('../repositories/users')
const router = require('express').Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
	res.send(await usersRepo.getAllUsers())
  });
  module.exports = router;

router.post(async function(req, res){

	// infomaton to update => req.body
	// infomation of current user => req.user

	



	console.log(req.body);
	// verification de data
	var createdUser = await User.addUser(req.body);

	res.send('User added');
})
router.route('/user/:id')

router.get(async function(req, res){

	user = await User.getUser(req.params.id);
	res.send(user);
});