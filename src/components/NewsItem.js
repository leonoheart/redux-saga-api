import React from 'react'

const imgStyle = {
    height: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple'
}

const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}
let NewsItem = ({ article }) => (
    article ? 
    <article style={articleStyle}>
        <div>
            <h1>{article.title}</h1>
            <img style={imgStyle} src={article.urlToImage} alt=''/>
            <h4>{article.description}</h4>
            <a href={article.url} target="_blank" rel="noopener noreferrer">READ MORE></a>
        </div>
    </article> :
    null
)

export default NewsItem


