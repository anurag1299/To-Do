import React from 'react'

function List(props) {
    const item = props.item
    return (
        <div>
            <li>{item} <button onClick={() => props.deleteHandler(item)}>Delete</button></li>
        </div>
    )
}

export default List
