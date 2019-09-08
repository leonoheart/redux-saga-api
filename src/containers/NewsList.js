import React from 'react'
import { connect } from 'react-redux'

import NewsItem from '../components/NewsItem'

let NewsList = ({articles}) => (
    articles ?
    articles.map(article => <NewsItem article = {article}></NewsItem> ) :
    null
)


const mapStateToProps = (state) => ({articles: state.articles})

NewsList = connect(mapStateToProps, null)(NewsList)

export default NewsList