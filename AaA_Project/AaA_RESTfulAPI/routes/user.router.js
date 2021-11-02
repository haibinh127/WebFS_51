const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

// đăng kí tài khoản
router.post('/register', userController.login);

// đăng nhập gửi jwt
router.post('/login', userController.register);

module.exports = router;