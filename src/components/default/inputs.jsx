import React from 'react'

export default function(props)
{
    function onKey(e)
    {
        if (props.onKey) props.onKey(e)
    }

    return <>
        <input id='title' type="text" placeholder='Insert title here' onKeyDown={onKey}/>
    </>
}