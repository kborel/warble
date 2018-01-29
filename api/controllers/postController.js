const Post = require('../models/Post');
const config = require('../config.json');

const type = 'posts';

exports.addPost = async (req, res) => {
  const post = await Post.query().insertAndFetch({
    ...req.body,
    user_id: req.user.id,
  }).eager('user');
  res.status(201).location(`${config.apiRoot}/${type}/${post.id}`).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.query().eager('user');
  res.json(posts);
};

exports.getPost = async (req, res, next) => {
  const post = await Post.query().findById(req.params.id);
  return !post ? next() : res.json(post);
};

