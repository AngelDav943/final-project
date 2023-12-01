import React from 'react'

export default function(props)
{
    function onKey(e)
    {
        if (props.onKey) props.onKey(e)
    }

    return <>
        <input id='test' type="text" placeholder='Title' onKeyDown={onKey}/>
        <input id='description' type="text" placeholder='Description' onKeyDown={onKey}/>
        <input id='urlImage' type='url' placeholder='Url Image' onKeyDown={onKey} />
    </>
}