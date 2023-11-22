import React from 'react'
import './desc.css'

export default function(props)
{
    function onClick()
    {
        if (props.onClick) props.onClick(props)
    }

    return (
        <article className="note">
            <p>Title: {props.title}</p>
            <p>Description: {props.description}</p>
            <button onClick={onClick}>Delete</button>
            <span> {props.type}</span>
        </article>
    )
}