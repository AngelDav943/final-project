import React from 'react'

export default function(props)
{

    function onClick()
    {
        if (props.onClick) props.onClick(props.text)
    }

    return (
        <article className="note">
            <p>{props.text}</p>
            <p>LOREM IPSUM :O</p>
            <button onClick={onClick}>Delete</button>
        </article>
    )
}