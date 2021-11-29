import React from 'react'
import MyComponent from './MyComponent'
import {PropTypes} from 'prop-types'
export default function(){
    return (
        <div>
            <MyComponent 
                props01={'ddd'} 
                props02={1} 
                props03={true} 
                props04={{no : 2}} 
                props05={[1,2,3,4]} 
                props06={() => "hey hey"}
                props07={10}
                props08={[true, false]}
                props09={{no : 1, name : '둘리', email: 'dooly@gmail.com'}}
            />
        </div>
    )
}

