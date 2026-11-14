import express from "express";
import multer from "multer";
import uploadFile from "../services/storage.server.js";
import postModel from "../models/post.model.js";
import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json());



const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post',upload.single("image"), async(req,res)=>{
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const result = await uploadFile(req.file.buffer)
        const post=await postModel.create({
            image:result.url,
            caption:req.body.caption
        })

        res.status(201).json({
            message: "Post created successfully",
            post
        });
    } catch (error) {
        console.error("Create post failed:", error);
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
})

app.get('/posts',async(req,res)=>{
    const post=await postModel.find();
    return res.status(200).json({
        message:"post fetch",
        post 
    })
})
export default app;
 