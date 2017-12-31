const Post = require('../models/Post');
const config = require('../config.json');

const type = 'posts';

exports.addPost = async (req, res) => {
  const post = await Post.query().insert(req.body);
  res.status(201).location(`${config.apiRoot}/${type}/${post.id}`).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.query();
  res.json(posts);
};

exports.getPost = async (req, res, next) => {
  const post = await Post.query().findById(req.params.id);
  return !post ? next() : res.json(post);
};

