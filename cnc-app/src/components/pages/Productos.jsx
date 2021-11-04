import React, { useEffect, useState } from 'react'
import {Product} from '../../domain/products'
import Cart from '../../domain/cart'
import {ProductRenderer} from '../main/ProductRenderer'




export const Productos = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    

    useEffect(()=>{
        fetch("http://localhost:4000/products")
            .then(data=>data.json())
            .then((data) => setProducts(
            data.map(value => {
                return new Product(value.id, value.name, value.description, value.price, value.stock, value.img)
        })),
        error => console.log(error))
    },[]) 
    
    const addToCart = (product) =>{
            setTotal(0)
            setCart(cart.concat(new Cart(product)))
        }

        
    /*useEffect(()=>{
        let aux = 0
        cart.forEach(product => {
            aux += product.price * product.quantity
        })
        setTotal(aux)
    },[cart])
*/
   /* useEffect(()=>{
        fetch("http://localhost:4000/products")
            .then(data=>data.json())
            .then((products) => products.filteredProducts(products.map(products => {
                
               */
    
    
    return (
        <>
            <section class="texto-productos">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae exercitationem
                    officiis tempore error et laudantium porro aliquam impedit perspiciatis eveniet placeat,
                    ipsa nisi dolor quis, fuga ducimus debitis quam cumque quasi accusantium. Architecto autem
                    officiis itaque non vel molestiae natus animi earum, ipsum, placeat aperiam illum at amet
                    aliquid ab exercitationem alias perspiciatis nam, consectetur dolorum. Animi exercitationem,
                    delectus deserunt eveniet, aut repellendus soluta, tempore facere tempora alias dolorum velit
                    quidem! Esse vitae illum voluptatem dolor, suscipit quis, atque exercitationem accusantium
                    reprehenderit cum minima odio doloremque rerum, iusto quaerat magnam fuga doloribus! Ipsam quasi
                    deserunt architecto voluptas quisquam? Repudiandae.</p>

            </section>
            <section class="buscador">
                <label for="searchBar">Buscar</label>
                <input id="searchBar" />

                <section id="SearchPlace"></section>
            </section>
            <div id="listado-productos">
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
                                cart.map (product => {
                                    return (
                                        <li>
                                            <p>{product.name}</p>
                                            <input id={`quantity${product.id}`} value={product.quantity}/>
                                            <p id={`priceById${product.id}`}>${product.price * product.quantity}</p>
                                        </li>
                                    )
                                })
                            )
                        }
                        
                        </ul>
                        <p>Total: $<span id="total-holder">{total}</span></p>
                    </div>
                </section>
            </div>
            
            <section id="product">

            </section>


            
        </>
    )
}
export default Productos;
