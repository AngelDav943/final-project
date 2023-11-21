import React from 'react'

export default function(props)
{
    function onClick()
    {
        if (props.onClick) props.onClick(props)
    }

    return (
        <article className="note">
            <p>TEST: {props.test}</p>
            <p>DESCRIPTION: {props.description}</p>
            <button onClick={onClick}>Delete</button>
            <span> {props.type}</span>
        </article>
    )
}