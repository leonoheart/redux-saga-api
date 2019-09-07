import React, {Component} from 'react'
import Button from './containers/Button'
import NewsItem from './containers/NewsItem'
import Loading from  './containers/Loading'

export default class App extends Component {
    render(){
        return (
            <div>
                <Button></Button>
                <Loading></Loading>
                <NewsItem></NewsItem>
            </div>
        )
    }
}