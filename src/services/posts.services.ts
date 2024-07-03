import { Request, Response } from 'express';
import { posts, Post } from "../data/posts";


export const findPostByID = (req:Request, res:Response) => {
    console.log('Getting a post by it`s ID...');

    const id = parseInt(req.params.id);
    if(!id){
        const error = new Error('Theres is no ID')
        res.status(400).json({
            msg: error.message
        })
    }

    const post:Post|undefined = posts.find(post => post.id === id);
    if(!post){
        const error = new Error('Post not found')
        res.status(404).json({
            msg: error.message
        })
    }

    return res.json({
        post
    })
}

export const getAllPosts = (req:Request, res:Response) => {
    console.log('Getting all the posts of the blog..');
    
    return res.json({
        posts
    })
}