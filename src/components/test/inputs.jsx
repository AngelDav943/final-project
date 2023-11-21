import React from 'react'

export default function(props)
{
    function onKey(e)
    {
        if (props.onKey) props.onKey(e)
    }

    return <>
        <input id='test' type="text" placeholder='test' onKeyDown={onKey}/>
        <input id='description' type="text" placeholder='desc' onKeyDown={onKey}/>
    </>
}