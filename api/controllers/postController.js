const Post = require('../models/Post');

exports.addPost = async (req, res) => {
  const post = await Post.query().insert(req.body);
  res.json(post);
};

