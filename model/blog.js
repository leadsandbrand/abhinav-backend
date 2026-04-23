const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    shortDescription: {
        type: String
    },

    content: {
        type: String,
        required: true   // stores CKEditor HTML
      },

    image: {
        type: String
    },

    category: {
        type: String
    },

    tags: {
        type: [String]
    },

    metaTitle: {
        type: String
    },

    metaDescription: {
        type: String
    },

    status: {
        type: String,
        default: "published"
    },

    views: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Blog", blogSchema);