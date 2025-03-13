import React, { useEffect, useState } from 'react'

import Llamados from '../../service/Llamados'

import "../home/Homes.css"


function Home() {

    const [tareas,settareas]=useState("")

    const [usuariosTareas,setusuarioTareas]=useState([])

    const [inputeditar,setinputeditar]=useState("")
   
    useEffect(() => {
   
        async  function recuperarDatos() {
            const datos= await Llamados.GetTarea()
           
    
            setusuarioTareas(datos)
        }
     
        recuperarDatos()
    
      }, []); 



    function tareasInpunt(evento) {

        settareas(evento.target.value)


    }

    function agregar() {
      if (!tareas.trim()) {
      alert("agregue una tarea")
      } else {
        Llamados.PostTarea(tareas)
        location.reload()
      }
            
     // settareas("")
     
    }

    function Eliminar(id) {
      if (Llamados.DeleteTarea(id)) {
        alert("tarea eliminada")
      }
     location.reload()
    }
    
    function inputEditar(evento) {
      setinputeditar(evento.target.value)
    }

    function Editar(id) {
      if (!inputeditar.trim()) {
        alert("agregue una tarea")
      } else {
        Llamados.UpdateTarea(inputeditar, id)
        location.reload()
      }
     
    }


  return (

    <div id='contenedorMayor'>
        <div id='titulo'>
            <h1>Tareas por hacer</h1>
        </div>

        <div id='form'>
            <input value={tareas} onChange={tareasInpunt}  type="text" placeholder='agregarTareas'/>
            <br />
            <button onClick={agregar} >Agregar</button>

           
        </div>

        <div>
            
        <h2 id='h2'>Lista de Tareas</h2>
      <ul id='lista'>

        {usuariosTareas.map((tarea, index) => (
          <li key={index} id='li'>
            <strong>{tarea.tareas}</strong>
            <br />
            <input onChange={inputEditar} type="text"placeholder={tarea.tareas} />      <button onClick={e=>Editar(tarea.id)} id='btneditar'>editar</button>   <button onClick={e=>Eliminar(tarea.id)} id='btneliminar'>eliminar</button>
          </li>
        ))}
      </ul>
      
        </div>


    </div>
  )
}

export default Home