import React, {useState}  from 'react'
import ReactDOM from 'react-dom'




export const Pedidos = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')



    return (
        <>
        
        <main id="inf-pedidos">
            <section>
                <h2>¿Cómo encargar un pedido?</h2>
                <br/>
                <p>Se puede realizar el pedido tanto por nuestras redes, como por Whatsapp.</p>
                <br/>
                <p>NO SE ATIENDEN LLAMADAS. A no ser que las mismas sean coordinadas y sea realmente necesario. La mayor parte del tiempo se esta en elaboracion de pedidos y atender llamadas puede ser muy complicado. Pedimos por favor que sea por mensaje (de texto o audio), y se le responderá a la brevedad</p>
                <br/>
                <br/>
                <br/>
                <p>Por cualquier consulta, dejenos su mensaje aqui y nos pondermos en contacto a la brevedad.</p>
            </section>
            <form method='POST' action='http://localhost:4000/formulario/' id="formulario">
                <h2>Consulta</h2>
                <label>Nombre</label>
                <input 
                    id="nombre"
                    type="text"  
                    name="nombre" 
                    placeholder="Ej: Camila"
                    onChange={e=>setNombre(e.target.value)}
                    value={nombre}/>
                <label>Correo electrónico</label>
                <input
                    id="correo"
                    type="text" 
                    name="correo" 
                    placeholder="Ej: aaaa@bbbbb.ccc"
                    onChange={e=>setCorreo(e.target.value)}
                    value={correo}/>
                <label>Teléfono</label>
                <input 
                    id="telefono"
                    type="text" 
                    name="telefono" 
                    placeholder="091234567"
                    onChange={e=>setTelefono(e.target.value)}
                    value={telefono}/>
                <label>Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje" 
                    placeholder="Escriba aqui su consulta..."
                    onChange={e=>setMensaje(e.target.value)}
                    value={mensaje}>
                </textarea>
                <input
                    id="boton"
                    type="submit" 
                    value="ENVIAR"/>
            </form>
                    
        
        </main>
         
        </>
    )
}
export default Pedidos;