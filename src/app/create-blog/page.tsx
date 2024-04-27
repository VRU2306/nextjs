
"use client"

import { useState } from "react";
import axios from "axios";

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [results, setResults] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setResults('')
            let date = new Date()
            await axios.post('/api/add-blogs', { title, content, imageUrl, date });
            console.log('Blog post created successfully');
            setTitle('');
            setContent('');
            setImageUrl('');
            setResults('Blog post created successfully')
        } catch (error) {
            console.error('Error creating blog post:', error);
        }
    };
    return <>
        <p className="text-3xl flex mt-2 justify-center">Create blog</p>
        <div className="w-full max-w-sm mx-auto mt-3 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 ">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div>
                    <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 ">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
            </form>

            {results &&
                <>
                <div className="text-green-800 flex justify-center">{results}</div>
                </>}
        </div>

    </>
}
export default CreateBlog;