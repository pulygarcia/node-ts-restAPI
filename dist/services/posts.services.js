"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPostByID = exports.getPosts = void 0;
const posts_1 = require("../data/posts");
const getPosts = () => {
    return posts_1.posts;
};
exports.getPosts = getPosts;
const findPostByID = (id) => {
    const post = posts_1.posts.find(post => post.id == id);
    return post;
};
exports.findPostByID = findPostByID;
