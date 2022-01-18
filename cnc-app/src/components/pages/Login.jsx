import React from 'react'

export const Login = () => {


    return (
        <div id="login">
            <h1>Iniciar sesión</h1>
            <form>
                <label>Usuario</label>
                <input 
                    id="usuario"
                    type="text"
                    name="usuario"
                    placeholder="Nombre de usuario">
                </input>

                <label>Contraseña</label>
                <input 
                    id="password"
                    type="password" 
                    name="password" 
                    placeholder="Contraseña">
                </input>
                <h6>Olvidé mi Contraseña</h6>
                <br/>
                <input 
                    id="iniciar-sesion"
                    type="button"
                    value="Iniciar Sesion">    
                </input>
            </form>
        </div>

    )
}




export default Login;