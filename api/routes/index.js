const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/posts', catchErrors(postController.addPost));

module.exports = router;
