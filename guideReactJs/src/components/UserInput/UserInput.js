import React from 'react'
const userInput=(props)=> {
    const inlinestyle={
        marginTop:'20px'
    }
        return (
            <div style={inlinestyle}>
                <input onChange={props.changed} type="text" value={props.currentName} />
            </div>
        )
}
export default userInput;