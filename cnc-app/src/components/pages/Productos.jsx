import React, { useEffect, useState } from 'react'
import {Product} from '../../domain/products'
import Cart from '../../domain/cart'
import {ProductRenderer} from '../main/ProductRenderer'
import FeatherIcon from 'feather-icons-react';




export const Productos = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])

    

    useEffect(()=>{
        fetch("http://localhost:4000/products")
            .then(data=>data.json())
            .then((data) => {
                const newProducts = data.map(value => {
                    return new Product(value.id, value.name, value.description, value.price, value.stock, value.img)
                })
                setProducts(newProducts)
                setFilteredProducts(newProducts)
                } )
            .catch((error) => console.log(error))
            },[])
    
    
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

    const filterProducts = (event) =>{
        const value = event.target.value
        let filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase()) ||
            product.description.toLowerCase().includes(value.toLowerCase()) ||
            product.id == value
        )
        setFilteredProducts(filteredProducts)
    }

    const deleteItem = (index) => {
        let newCart = [...cart]
        if (index > -1) {
           newCart.splice(index, 1);
        }
        setCart(newCart)
        }
    
    
    return (
        <>
            <section className="texto-productos">
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
            <section className="buscador">
                <label for="searchBar">Buscar</label>
                <input id="searchBar" onChange={filterProducts} />

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
                                    filteredProducts.map(product => 
                                        <div key={product.id + product.name}>
                                            <ProductRenderer 
                                                product={product} 
                                                addToCart={addToCart}>
                                            </ProductRenderer>
                                        </div>
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
                </section>
            </div>
            
            <section id="product">

            </section>


            
        </>
    )
}
export default Productos;
