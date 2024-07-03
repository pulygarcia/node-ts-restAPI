"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const posts_services_1 = require("./services/posts.services");
const posts = (0, posts_services_1.getPosts)();
console.log(posts);
const post2 = (0, posts_services_1.findPostByID)(2);
console.log((_a = post2 === null || post2 === void 0 ? void 0 : post2.title) !== null && _a !== void 0 ? _a : 'Post not found...');
