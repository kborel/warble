const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/posts', catchErrors(postController.addPost));

router.get('/posts', catchErrors(postController.getPosts));

module.exports = router;
