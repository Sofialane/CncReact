import React, { useEffect, useState } from 'react'
import {Product} from '../../domain/products'
import Cart from '../../domain/cart'
import {ProductRenderer} from './ProductRenderer'
 

/* SACADO DEL REPO DEL PROFE DE LA PAGINA MAIN, CORRESPONDIENTE A LO QUE TENGO QUE HACER EN MI PAGINA PEDIDOS.JSX*/
export const Main = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (product) =>{
        setTotal(0)
        setCart(cart.concat(new Cart(product)))
    }

    useEffect(()=>{
        getProducts((data) => setProducts(
            data.map(value => {
                return new Product(value.id, value.name, value.description, value.price, value.stock, value.img)
        })),
        error => console.log(error))
    },[]) 

    return (
        <section id="contenido">
            <div id="Productos">
                <h3>Productos</h3>
                <div id="product-holder">
                {
                            products.length == 0 ? 
                            (
                                <>
                                    No hay productos
                                </>
                            ):
                            (
                                products.map(product => 
                                    <ProductRenderer 
                                        product={product} 
                                        addToCart={addToCart}>
                                    </ProductRenderer>
                                )
                            )
                        }
                </div>
            </div>
            <div id="Carrito">
                <h3>Carrito</h3>
                <ul id="cart-holder">
                {
                            cart.length == 0 ? 
                            (
                                <>
                                    El carrito esta vacio
                                </>
                            ):
                            (
                                cart.map (value => {
                                    return (
                                        <li>
                                            <p>{this.name}</p>
                                            <input id={`quantity${this.id}`} value={this.quantity}/>
                                            <p id={`priceById${this.id}`}>${this.price * this.quantity}</p>
                                        </li>
                                    )
                                })
                            )
                        }
                </ul>
                <p>Total: $<span id="total-holder">{total}</span></p>
            </div>
        </section>
    )
}

export default Main;