import React from 'react'

export default function(props)
{
    function onClick()
    {
        if (props.onClick) props.onClick(props)
    }

    return (
        <article className="note">
            <h3>Title {props.h3}</h3>
            <p>{props.description}</p>
            <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-cartoon-yellow-coupe-illustration-image_1323387.jpg" id='imageUser' alt="" />
            <button onClick={onClick}>Delete</button>
        </article>
    )
}