const Blog = require("../model/blog");


// Generate Slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};


// Add Blog
const createBlog = async (req, res) => {
  try {

    req.body.slug = generateSlug(req.body.title);

    const blog = await Blog.create(req.body);

    res.status(201).json({
      success: true,
      message: "Blog Created Successfully",
      blog
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// Get All Blogs
const getAllBlogs = async (req, res) => {
  try {

    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      blogs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// Get Single Blog By Slug
const getSingleBlog = async (req, res) => {
  try {

    const blog = await Blog.findOne({
      slug: req.params.slug
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog Not Found"
      });
    }

    res.status(200).json({
      success: true,
      blog
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// Update Blog
const updateBlog = async (req, res) => {
  try {

    if (req.body.title) {
      req.body.slug = generateSlug(req.body.title);
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Blog Updated Successfully",
      blog
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// Delete Blog
const deleteBlog = async (req, res) => {
  try {

    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


module.exports = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
};