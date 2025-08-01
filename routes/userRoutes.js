// routes/userRoutes.js
const express = require('express'); // ✅ Required to use express.Router()
const {
  register,
  login,
  getUserDetails,
  updateUserDetails,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/details', getUserDetails);
router.put('/update', updateUserDetails);
router.delete('/delete', deleteUser);

module.exports = router;
