import React from 'react'

export default function(props)
{
    function onClick()
    {
        if (props.onClick) props.onClick(props)
    }

    return (
        <article className="note">
            <p>{props.title}</p>
            <button onClick={onClick}>Delete</button>
        </article>
    )
}