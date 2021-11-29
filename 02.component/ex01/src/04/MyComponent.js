import React, { Fragment } from "react";
import {PropTypes} from 'prop-types'
export default function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}){
    return (
        <Fragment>
            <h2>Property Validation</h2>
            <span>props01 : { props01 }</span>
            <br/>
            <span>props02 : { props02 }</span>
            <br/>
            <span>props03 : { `${props03}`}</span>
            <br/>
            <span>props04 : { props04.no }</span>
            <br/>
            <span>props05 : { props05.map((e, i) => <span><br/><b>{i} : {e}</b></span>) }</span>
            <br/>
            <span>props06 : { props06() }</span>
            <br/>
            <span>props07 : { props07 }</span>
            <br/>
            <span>props08 : { props08.map(v => <b>{`${v} `}</b>) }</span>
            <br/>
            <span>props09 : { props09.no }</span>
            <br/>
        </Fragment>
    )
}
MyComponent.propTypes = {
    // Built-In PropTypes Validator
    props01 : PropTypes.string,
    props02 : PropTypes.number.isRequired,
    props03 : PropTypes.bool,
    props04 : PropTypes.object,
    props05 : PropTypes.array,
    props06 : PropTypes.func,

    // Built-In PropTypes Validator(Combined Primitive)
    props07 : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    props08 : PropTypes.arrayOf(PropTypes.bool),
    props09 : PropTypes.shape({
        no : PropTypes.no,
        name : PropTypes.string,
        email : PropTypes.string
    })
}
MyComponent.defaultProps = {
    props01 : 'default',
    props02 : 0,
    props03 : false,
    props04 : {},
    props05 : [],
    props06 : () =>  "default function",
}