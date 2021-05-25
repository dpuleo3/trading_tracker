import React from 'react'

import '../assets/styles/newsapi.css'

function News({ image, url, title, content, author }) {
    return (

        <div className="news-container">
            <div class="card mb-3">
                <img src={image} class="card-img-top" alt="..." url={url} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{content}</p>
                    <p class="card-text">{author}</p>
                </div>
            </div>
        </div>
    
    )
}

export default News
