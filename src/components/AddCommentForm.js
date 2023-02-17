import React, { useState } from 'react';

const AddCommentForm = ({articleName, setArticleInfo}) => {

    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async () => {
        const result = fetch(`http://localhost:5000/api/articles/${articleName.name}/add-comments`, {
            method: "post",
            body: JSON.stringify({username, text: commentText}),
            headers: {
                "Content-Type" : "application/json",
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername("");
        setCommentText("");
    };

    return (
        <form className="shadow rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="text-xl font-bold text-gray-900 text-left">Add a Comment</h3>
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >Name:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:otuline-none focus:shadow-outline" type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >Comment:</label>
            <textarea rows="4"  cols="50" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 block" type="submit"
            onClick={() => addComment()}>Add Comment</button>
        </form>
    );
}

export default AddCommentForm;