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
            <img onClick={onClick} className='delete' src="src/assets/images/delete.svg"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </article>
    )
}