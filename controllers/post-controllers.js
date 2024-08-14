const Post = require("../models/post");
const createPath = require("../helpers/create_path");

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath("error"), { title: "Error" });
};

const getPost = (req, res) => {
  const title = "post";
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("post"), { title, post }))
    .catch((error) => handleError(res, req));
};

const putEdit =
  ("/edit/:id",
  (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Post.findByIdAndUpdate(id, { title, author, text })
      .then((result) => res.redirect(`/posts/${id}`))
      .catch((error) => handleError (res, req));
  });

const getEdit =
  ("/edit/:id",
  (req, res) => {
    const title = "edit post";
    Post.findById(req.params.id)
      .then((post) => res.render(createPath("edit_post"), { title, post }))
      .catch((error) => handleError(res, req));
  });

const deletePost =
  ("/posts/:id",
  (req, res) => {
    const title = "post";
    Post.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => handleError(res, req));
  });

const getPosts =
  ("/posts",
  (req, res) => {
    const title = "Posts";
    Post.find()
      .sort({ createdAt: -1 })
      .then((posts) => res.render(createPath("posts"), { title, posts }))
      .catch((error) => handleError(res, req));
  });

const getAdd =
  ("/add_post",
  (req, res) => {
    const title = "add_post";
    res.render(createPath("add_post"), { title });
  });

const postAddpost =
  ("/add_post",
  (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text });
    post
      .save()
      .then((result) => res.redirect("/posts"))
      .catch((error) => handleError(res, req));
  });

module.exports = {
  getPost,
  putEdit,
  getEdit,
  deletePost,
  getPosts,
  getAdd,
  postAddpost,
};
