import React  from 'react'

export const Pedidos = () => {
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
            <form id="formulario">
                <h2>Consulta</h2>
                <label>Nombre</label>
                <input type="text"  name="Nombre" placeholder="Nombre"/>
                <label>Correo electrónico</label>
                <input type="text" name="Correo electrónico" placeholder="Correo electrónico"/>
                <label>Teléfono</label>
                <input type="text" name="Teléfono" placeholder="Teléfono"/>
                <label>Mensaje</label>
                <textarea name="mensaje" placeholder="Escriba aqui su consulta..."></textarea>
                <input type="button" value="ENVIAR" id="boton"/>
            </form>
        
        </main>
         
        </>
    )
}
export default Pedidos;