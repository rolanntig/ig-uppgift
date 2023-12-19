import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreatePost = () => {
    const [post, setPost] = useState({
        image: null,
        caption: ''
    });

    console.log(post)

    const handleChange = (e) => {
        setPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/post', post);
        navigator('/');

    }
  return (
    <div>
          <form action="" method='post' onSubmit={handleSubmit}>
              <label htmlFor="image">Image</label>
              <input type="file" name="image" id="image" required onChange={handleChange}/>
              <label htmlFor="caption">Caption</label>
              <input type="text" name="caption" id="caption" required onChange={handleChange}/>
                <input type="submit" value="Post" />
          </form>
          <img src={post.image} alt="sds" />
    </div>
  )
}

export default CreatePost
