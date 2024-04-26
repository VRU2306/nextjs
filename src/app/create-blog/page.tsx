
"use client"

import { useState } from "react";
import axios from "axios";

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('/api/add-blogs', { title, content, imageUrl });
            console.log('Blog post created successfully');
            // Reset form fields
            setTitle('');
            setContent('');
            setImageUrl('');
        } catch (error) {
            console.error('Error creating blog post:', error);
        }
    };
    return <>
        <p className="text-3xl flex mt-2 justify-center">Create blog</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
}
export default CreateBlog;