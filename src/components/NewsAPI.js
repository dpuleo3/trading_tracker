import React, {useState, useEffect} from 'react'
import axios from 'axios'
import News from './News'

import '../assets/styles/newsapi.css'


// API KEY NewsAPI
// d162ad4f48ae40a6b49cc3ea18ab0cee


function NewsAPI() {

    // const [news, setNews] = useState([]);

    // const [search, setSearch] = useState('');

    // useEffect(() => {
    //     axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d162ad4f48ae40a6b49cc3ea18ab0cee')
    //     .then(res => {
    //         setNews(res.data);
    //     }).catch(error => alert('LA CAGASTE'))
    // }, []);

    // const handleChange = e => {
    //     setSearch(e.tagert.value)
    // };

    // const filteredNews = news.filter(news => 
    //     news.title.toLowerCase().includes(search.toLowerCase())
    // );

    return (

        <div className="news-api-container">
            <div className="api-wrapper">
                <div className="news-search">
                    <h2 className="news-text">LUPA</h2>
                    <form>
                        {/* <input className="news-input" type="text" 
                        placeholder="Search" onChange={handleChange}/> */}
                    </form>
                </div>
                {/* {filteredNews.map(news => {
                    return <News 
                        key={news.id} 
                        image={news.urlToImage}
                        url={news.url}
                        title={news.title}
                        content={news.content}
                        author={news.author}
                    />; 
                })} */}
            </div>
        </div>

)
}

export default NewsAPI
