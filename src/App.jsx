import React from 'react'
import { useState, useEffect } from 'react'

// notas
import Note from './components/default/note.jsx'
import NoteInputs from './components/default/inputs.jsx'

import TestNote from './components/test/note.jsx'
import TestNoteInput from './components/test/inputs.jsx'

function App() {
  const [notes, setNotes] = useState([])
  var [selectedType, setType] = useState("default")

  const noteTypes = {
    "default": [Note, NoteInputs],
    "description": [TestNote, TestNoteInput],
    "image": [TestNote, TestNoteInput],
  }

  function loadNotes()
  {
    if (localStorage.getItem("notes") == null) return // Verifica si existe alguna nota guardada para continuar

    // Convierte el texto guardado a una lista
    var loadedNotes = localStorage.getItem("notes").split("<note")

    loadedNotes = loadedNotes.map(value => {
      var rawdata = value.split(";")
      rawdata = rawdata.filter(item => {
        return (item != "" && item.includes("=") == true)
      })

      var data = {}
      for (let index = 0; index < rawdata.length; index++) {
        const split = rawdata[index].split("=")
        data[split[0].replace(/ /g, "")] = decodeURI(split[1])
      }

      return data
    })

    loadedNotes = loadedNotes.filter(item => { // Filtra notas vacias
      return (Object.keys(item) != 0 && item.constructor == Object)
    })

    setNotes(loadedNotes) // Actualiza el estado de las notas
  }

  useEffect(() => {
    loadNotes()
  },[]);

  function saveNote(data)
  {
    var existingNotes = localStorage.getItem("notes") || "" // consigue las notas existentes

    var keys = ""
    for (const key in data)
    {
      keys += " " + key + "=" + encodeURI(data[key]) + ";"
    }

    // guarda la informacion en el local Storage
    localStorage.setItem("notes", existingNotes + "<note"+keys+"> ")
  }

  function submitNote()
  {
    var inputs = document.getElementById("inputs").children;
    var noteData = {
      "type": selectedType,
      "timestamp": String(Date.now()),
    };

    let empty = true
    for (let index = 0; index < inputs.length; index++) {
      if (String(inputs[index].value).replace(/ /g, "") != "") empty = false
      noteData[inputs[index].id] = inputs[index].value
    }
    if (empty == true) return; // Verifica si hay minimo de un input con información

    saveNote(noteData)
    setNotes([...notes, noteData]) // parecido a array.push(), inserta el texto como ultimo elemento

    for (let index = 0; index < inputs.length; index++) {
      inputs[index].value = ""
    }
  }

  function removeNote(props)
  {
    var items = {}
    for (const key in props) {
      if (props[key].constructor == String) items[key] = props[key]
    }

    const noteIndex = notes.findIndex(data => String(data.timestamp) == String(items.timestamp))
    if (noteIndex == -1) return // verifica si la nota existe en la lista mostrada en la pagina

    var keys = ""
    for (const key in items)
    {
      keys += " " + key + "=" + encodeURI(items[key]) + ";"
    }

    var savedNotes = localStorage.getItem("notes") || ""
    savedNotes = savedNotes.replace("<note"+keys+"> ","")
    localStorage.setItem("notes", savedNotes) // Remueve la nota de las notas guardadas

    var newNotes = [...notes]
    newNotes.splice(noteIndex, 1)

    setNotes(newNotes)
  }

  function getOptions()
  {
    var options = [];
    for (const key in noteTypes) {
      options.push(<option key={key} value={key}>{key}</option>)
    }

    return options;
  }

  function getForm()
  {
    const FormInput = noteTypes[selectedType][1];
    return <FormInput onKey={(e) => {if (e.key == 'Enter') submitNote()}}/>
  }

  return (
    <>
      <div>
        <select id="typeInput" onChange={(e) => {setType(e.target.value)}}>
          {getOptions()}
        </select>
        <div id="inputs">
          {getForm()}
        </div>
        <button onClick={submitNote}>Submit</button>
      </div>

      {notes.map((data, index) => {
        const SelectedNote = noteTypes[data.type][0];
        return (<SelectedNote key={index} {...data} onClick={removeNote}/>);
      })}
    </>
  )
}

export default App
