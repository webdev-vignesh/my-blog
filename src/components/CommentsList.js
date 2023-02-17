import React from 'react';

const CommentsList = ({comments}) => {
    return (
        <div>
            <h5 className="sm:text-xl text-xl font-bold mt-6 mb-4 text-gray-900 text-left">
                Comments:
                {comments.map((comment, index) => (
                    <div className="mb-4" key={index}>
                        <h6 className="text-gray-900 font-semibold">
                            {comment.username}: &nbsp;
                            <p className="text-gray-600 inline">
                                {comment.text}
                            </p>
                        </h6>
                    </div>
                ))}
            </h5>    
        </div>
    );
}

export default CommentsList;