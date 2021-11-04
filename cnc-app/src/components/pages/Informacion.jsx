import React from 'react'

import Ilustracion from '../../assets/images/ilustracion.png'


export const Informacion = () => {
    return (
        <>
        
        <section className="texto-informacion">
            <section>
                <h2>¿Con cuanto tiempo tengo que realizar el pedido?</h2>
                <br/>
                <p>Siempre con el mayor tiempo de anticipacion es mejor. Se aclaran mejor las dudas sin ningun apuro. Dentro de lo ideal se necesita una semana antes para confirmar el pedido, realizando seña del mismo.</p>
                <br/>
                <p>Pueden haber exepciones de tomar pedidos con 72hs de anticipacion. Segun el pedido que sea. Consultar!</p>
                <br/>
                <br/>
                <br/>
            </section>
            <section>
                <h2>¿Hay cantidades minimas?</h2>
                <br/>
                <p>En cualquier producto, sin ser tortas y postres, si, contamos con un minimo de pedido, segun el producto. La mayoria se vende por docena o media docena. Consultar</p>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
            <section>
                <h2>¿En fechas especiales se toman pedidos aparte?</h2>
                <br/>
                <p>En fechas especiales como Navidad, Pascuas, Dia de la madre, padre, etc, los pedidos seran tomados igual, con menor disponibilidad ya que para esas fechas estamos en produccion de dichos dias.</p>
                <br/>
                <p>Por esto mismo, recomendamos siempre pedir con anticipacion siempre sus pedidos</p>
                <br/>
                <br/>
                <br/>
            </section>
            <section>
                <h2>¿Que metodos de pago hay?</h2>
                <br/>
                <p>Se puede pagar en efectivo, trasnferencia o deposito a OCA BLUE o BROU. Tambien se aceptan giros a cedula, el costo del mismo corre a cargo del cliente.</p>
                <br/>
                <p>Aplica para seña, y para totalidad de pago. </p>
                <br/>
                <br/>
                <br/>
            </section>
        </section>
        { <section className="ilustracion"> 
            <center>
                <img src={Ilustracion} alt="Ilustracion"/>
            </center>
         </section> }
        
        </>
    )
}
export default Informacion;