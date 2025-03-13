import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import "../login/sLoginStyle.css"

import Llamado from '../../service/Llamado'

function Login() {

const [usuarios,setusuarios]=useState([])

   const navigate= useNavigate()
   
    useEffect(() => {
   
        async  function recuperarDatos() {
            const datos= await Llamado.GetUser()
            console.log(datos);
    
            setusuarios(datos)
        }
     
        recuperarDatos()
    
      }, []); 


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

function iniciar() {

    const encontrado = usuarios.filter(usuario => usuario.Nombre===Nombre && usuario.Apellido=== Apellido && usuario.Contrasena===Contrasena)
     console.log(encontrado.length);
     
  
    if (encontrado.length === 0) {
       alert("usuario no encontrado")
    }else{
  

      navigate('/Home')
      
    }
    
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
<p id='parrafo'>ya tienes una cuenta?<a href="http://localhost:5176/Registro">registrar aqui</a></p>
<br />

<button onClick={iniciar} id='btn'>iniciar sesion</button>

</div>
        
    </div>
  )
}

export default Login