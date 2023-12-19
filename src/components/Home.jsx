import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Comment from './Comments'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null); // Add selectedPostId state
    
    useEffect(() => {
        axios.get('/home').then((resp) => {
            setPosts(resp.data.posts);
        })
    }, []);
    
    const handlePostClick = (postid) => {
        setIsModalOpen(true);
        setSelectedPostId(postid); // Set the selected post id
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} onClick={() => handlePostClick(post.id)}> {/* Pass the post id to handlePostClick */}
                    <h1>{post.author.username}</h1>
                    <img src={post.image} alt="" />
                    <p>{post.caption}</p>
                </div>
            ))}
            <Comment isOpen={isModalOpen} onClose={handleCloseModal} postid={selectedPostId} /> {/* Pass the selected post id */}
        </div>
    );
}

export default Home;
