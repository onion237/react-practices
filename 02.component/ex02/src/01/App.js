import React from 'react'
export default function(){
    const h1Style = {
        color : 'lime',
        width : '100px'
    }
    return (
        <div id='App' style={{display:'flex', height:'500px',justifyContent:'center', alignItems:'center'}}>
            <h1 style={h1Style}>Inline Styling</h1>
        </div>
    )
}

