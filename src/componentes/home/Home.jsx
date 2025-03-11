import React, { useEffect, useState } from 'react'

import Llamados from '../../service/Llamados'

import "../home/Homes.css"


function Home() {

    const [tareas,settareas]=useState()

    const [usuariosTareas,setusuarioTareas]=useState([])
   
    useEffect(() => {
   
        async  function recuperarDatos() {
            const datos= await Llamados.GetTarea()
            console.log(datos);
    
            setusuarioTareas(datos)
        }
     
        recuperarDatos()
    
      }, []); 



    function tareasInpunt(evento) {

        settareas(evento.target.value)


    }

    function agregar() {

            Llamados.PostTarea(tareas)

    }

    function Eliminar(id) {
      Llamados.DeleteTarea(id)
        
    }
    //traer los datos al input y editarlos
    function Editar(tareas,id) {
        Llamados.UpdateTarea()
    }



  return (

    <div>
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
            
        <h2>Lista de Tareas</h2>
      <ul id='lista'>
        {usuariosTareas.map((tarea, index) => (
          <li key={index}>
            <strong>tareas:{tarea.tareas}</strong>

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