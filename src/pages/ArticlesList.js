import React from "react";
import Articles from "../components/Articles";
import articles from "./article-content";

const ArticlesList = () => {
    return(
        <>
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">Articles List</h1>
            <div className="container py-4 mx-auto">
                <Articles articles={articles} />
            </div>
        </>
    )
}

export default ArticlesList;