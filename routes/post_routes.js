const express = require("express");

const router = express.Router();
const {
  getPost,
  putEdit,
  getEdit,
  deletePost,
  getPosts,
  getAdd,
  postAddpost,
} = require("../controllers/post-controllers");

//get all po

router.get("/add_post", getAdd);

router.post("/add_post", postAddpost);

router.get("/posts/:id", getPost);

router.get("/posts", getPosts);

router.delete("/posts/:id", deletePost);

router.get("/edit/:id", getEdit);

router.put("/edit/:id", putEdit);

module.exports = router;
