import React, {Component, Fragment} from 'react'
import Contents from './Contents'
import Header from './Header'

export default class extends Component{
    render(){
        return (
            <Fragment>
                <Header/>
                <Contents/>
            </Fragment>
        )
    }
}