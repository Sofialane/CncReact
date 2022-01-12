import React from 'react'

export const ProductRenderer = ({product, addToCart}) => {
    return (
        <span className="product">
            <div className="img">
                <a href="#">
                    <img alt={product.name} src={product.img}/></a>
            </div>
            <div className="info">
                <a className="Nombre" href="#">{product.name}</a>
                <p>{product.description}</p>
                <div className="Precio">
                    <span className="st">Precio </span>
                    <strong>${product.price}</strong>
                </div>
                <div className="Agregar">
                    <button onClick={() => addToCart(product)}>Agregar</button>
                </div>
            </div>
        </span>
    )
}
