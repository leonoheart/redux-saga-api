import React, {Component} from 'react'
import Button from './containers/Button'
import NewsList from './containers/NewsList'
import Loading from  './containers/Loading'

export default class App extends Component {
    render(){
        return (
            <div>
                <Button></Button>
                <Loading></Loading>
                <NewsList></NewsList>
            </div>
        )
    }
}