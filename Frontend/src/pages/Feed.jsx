import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"


const Feed = () => {

    const [ posts, setPosts ] = useState([
        {
            _id: "1",
           image: "https://ik.imagekit.io/anushkaa/image_DfGFU_Sj9.jpg",
            caption: "Beautiful sceneryyyyyy",
        }
    ])

    useEffect(()=>{

        axios.get("http://localhost:3000/posts")
        .then((res)=>{

            setPosts(res.data.post)

        })
        .catch((err)=>{
            console.log(err)
        })
        
    },[])
    

    return (

        <section className='feed-section' >

            <Link to="/create-post" className='create-post-link' >+ Create post</Link>

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }

        </section>

    )
}

export default Feed