import React from 'react'

const inline = {
    float: 'left'
}

function List(props) {
    const item = props.item
    return (
        <div>
            <li style={inline}>{item} <button onClick={() => props.deleteHandler(item)}>Delete</button></li>
        </div>
    )
}

export default List
