import React, { useEffect, useState } from 'react'

import Llamados from '../../service/Llamados'

import "../home/Homes.css"


function Home() {

    const [tareas,settareas]=useState()

    const [usuariosTareas,setusuarioTareas]=useState([])

    const [inputeditar,setinputeditar]=useState()
   
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

            Llamados.PostTarea(tareas)
            location.reload()

    }

    function Eliminar(id) {
      Llamados.DeleteTarea(id)
      location.reload()
    }
    
    function tareasInpunt (evento) {
      setinputeditar(evento.target.value)
    }

    function Editar(tareas,id) {
        Llamados.UpdateTarea()
      
    }



  return (

    <div id='contenedorMayor'>
        <div id='titulo'>
            <h1>Tareas por hacer</h1>
        </div>

        <div id='form'>
            <input value={tareas} onChange={tareasInpunt}  type="text" placeholder='agregarTareas'/>
            <button onClick={agregar} >Agregar</button>

            {/*aqui ira el contador */  }
            <div><p></p></div>
        </div>

        <div>
            
        <h2 id='h2'>Lista de Tareas</h2>
      <ul id='lista'>

        {usuariosTareas.map((tarea, index) => (
          <li key={index}>
            <strong>tareas:{tarea.tareas}</strong>
            <br />
           <input value={inputeditar} onChange={inputEditar} type="text" />
            <button onClick={e=>Editar(tarea.id)} id='btneditar'>editar</button> 
            <button onClick={e=>Eliminar(tarea.id)} id='btneliminar'>eliminar</button>
          </li>
        ))}
      </ul>
        </div>


    </div>
  )
}

export default Home