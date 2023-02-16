import React from "react";
import { Link } from "react-router-dom";

const Articles = ({articles}) => {
    return(
        <div className="flex flex-wrap -m-4">
            {articles.map((article) => (
                <div className="p-4 md:w-1/2">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Link to={`/article/${article.name}`}>
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center
                            " src={article.thumbnail} alt={article.name}/>
                        </Link>
                        <div className="p-6">
                            <Link  to={`/article/${article.name}`}>
                            <h3 className="tite-font text-lg font-medium-text">
                                {article.title}
                            </h3>
                            </Link>
                            <p className="leading-relaxed mb-3">{article.content[0].substring(0, 80)}...</p>
                            <div className="flex items-center flex-wrap">
                                <Link to={`/article/${article.name}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                    Learn More
                                </Link>
                                <div className="justify-end flex-1 text-right">
                                    {article.date}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Articles;