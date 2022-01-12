import React, { useEffect, useState } from 'react'
import Cart from '../../domain/cart'





export const Carrito = () => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (Product) =>{
        setTotal(0)
        setCart(cart.concat(new Cart(Product)))
    }

    useEffect(()=>{
        let aux = 0
        cart.forEach(value => {
            aux += value.product.price * value.quantity
        })
        setTotal(aux)
    },[cart])

    const deleteItem = (index) => {
        let newCart = [...cart]
        if (index > -1) {
           newCart.splice(index, 1);
        }
        setCart(newCart)
    } 

    return (
        <div className="carrito-nuevo">
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
                    cart.map ((value, index) => {
                        console.log(value)
                        return (
                            <li key={index}>
                                <button id="delete" onClick={() => deleteItem(index)}>X</button> <p>{value.product.name}</p>
                                <input id={`quantity${value.product.id}`} value={value.quantity}/>
                                <p id={`priceById${value.product.id}`}>${value.product.price * value.quantity}</p> 
                                
                            </li>
                        )
                    })
                )
            }
            
            </ul>
            <p>Total: $<span id="total-holder">{total}</span></p>
        </div> 
    </div>
    )
}

export default Carrito;