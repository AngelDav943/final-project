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
            <img onClick={onClick} className='delete' src="">
            <p>{props.title}</p>
            <p>{props.description}</p>
            
            <span> {props.type}</span>
        </article>
    )
}