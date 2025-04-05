const express = require("express");
const { createBlogPost, updateBlogPost, deleteBlogPost, getOnePost, getAllBlogPost } = require("../Controllers/BlogPostController");
const validateToken = require("../Middlewares/validateToken")
const router = express.Router();

router.get("/all", getAllBlogPost);

router.get("/:_id", getOnePost);

router.put("/:_id",validateToken, updateBlogPost);

router.delete("/:_id",validateToken, deleteBlogPost)

router.post("/create",validateToken, createBlogPost)

module.exports = router;
