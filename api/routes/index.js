const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/', catchErrors(authController.login));

router.get(
  '/',
  authController.authenticate,
  authController.verify,
);

router.post(
  '/posts',
  authController.authenticate,
  catchErrors(postController.addPost),
);

router.get(
  '/posts',
  authController.authenticate,
  catchErrors(postController.getPosts),
);

router.get('/posts/:id', catchErrors(postController.getPost));

router.post(
  '/register',
  catchErrors(userController.register),
  catchErrors(authController.login),
);

module.exports = router;
