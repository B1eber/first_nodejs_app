const express = require("express");

const router = express.Router();
const {
  getPost,
  putEdit,
  deletePost,
  getPosts,
  postAddpost,
} = require("../controllers/api_post_controllers");

//get all posts
router.get("/api/posts", getPosts);

//Add new posts
router.post("/api/post", postAddpost);

//get post by ID
router.get("/api/post/:id", getPost);

//delete post by ID
router.delete("/api/post/:id", deletePost);

//Update post by ID
router.put("/api/post/:id", putEdit);

module.exports = router;
