import React, {Fragment} from 'react'
import Contents from './Contents'
import Header from './Header'

export default function(){

    return (
        // <Fragment>
        //     <Header/>
        //     <Contents/>
        // </Fragment>
        // React.createElement(Fragment, null, [Header(),Contents()])
        React.createElement(Fragment, null, Header(),Contents())
    )
}