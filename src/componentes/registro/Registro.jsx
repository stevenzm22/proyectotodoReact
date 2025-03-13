import React, { useState } from 'react'

import "../registro/RegidtroStyle.css"


import Llamado from '../../service/Llamado'

function Registro() {

const [Nombre,setNombre]=useState()
const [Apellido,setApellido]=useState()
const [Contrasena,setContrasena]=useState()

function inputNombre(evento) {
    setNombre(evento.target.value)
}
function inputApellido(evento) {
    setApellido(evento.target.value)
}
function inputContrasena (evento) {
    setContrasena(evento.target.value)
}

function registrar(evento) {
  
  Llamado.PostUser(Nombre,Apellido,Contrasena)
}

  return (

    <div id='contenedor'>
        <div  id='form'>

        <label htmlFor="nombre">Nombre</label>

        <input value={Nombre} onChange={inputNombre} type="text" />

        <label htmlFor="apellido">Apellido</label>
        <input value={Apellido} onChange={inputApellido} type="text" />
        <label htmlFor="contraseña">Contraseña</label>
        <input value={Contrasena} onChange={inputContrasena} type="password" />
        <p id='parrafo'>ya tienes una cuenta?<a href="http://localhost:5176/login">iniciar sesion</a></p>
        <br />
        <button onClick={registrar} id='btn'>Registrar</button>

        </div>

    </div>
  )
}

export default Registro