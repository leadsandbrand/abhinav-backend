
const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
} = require("../controller/blogcontroller");

// Create Blog
router.post("/create", createBlog);

// Get All Blogs
router.get("/", getAllBlogs);

// Get Single Blog by Slug
router.get("/:slug", getSingleBlog);

// Update Blog
router.put("/update/:id", updateBlog);

// Delete Blog
router.delete("/delete/:id", deleteBlog);

module.exports = router;