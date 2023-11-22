import React from "react";
import "./desc.css";

export default function (props) {
  function onKey(e) {
    if (props.onKey) props.onKey(e);
  }

  return (
    <>
        <input id="title" type="text" placeholder="Title" onKeyDown={onKey} />
        <input id="description" type="text" placeholder="Description" onKeyDown={onKey}/>
      </>
  );
}
