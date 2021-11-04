import React from 'react'

import alfajordesalchichon from '../assets/images/salchichon.jpg';
import alfajordemaicena from '../assets/images/maicena.jpg';
import donas from '../assets/images/donas.jpg';
import pastafrolas from '../assets/images/pastafrola.jpg';

export const MiniPosts = () => {
    return (
        <section>
          <div className="fotos">
            <div>
              <img src={alfajordesalchichon} alt="Foto_Alfajores_de_salchichon" className="alf-salchichon" />
              <h3>ALFAJORES DE SALCHICHÓN</h3>
              <p>Salchichon de chocolate amargo relleno de muuuucho dulce de leche, bañado en chocolate blanco o negro</p>
              <a href="#">Comprar</a>
            </div>
            <div>
              <img src={alfajordemaicena} alt="Foto_Alfajores_de_maicena" className="alf-maicena" />
              <h3>ALFAJORES DE MAICENA</h3>
              <p>¿Que mejor para la tarde que un alfajor de maicena con mucho dulce?</p>
              <a href="#">Comprar</a>
            </div>
            <div>
              <img src={donas} alt="Foto_dona" class="donas" />
              <h3>DONAS</h3>
              <p>Donas decoradas a tu gusto, vos elegis que chocolate y que topping</p>
              <a href="#">Comprar</a>
            </div>
            <div>
              <img src={pastafrolas} alt="Foto_pastafrolas" class="pastafrola" />
              <h3>PASTAFROLAS</h3>
              <p>La discusion de siempre, ¿pastafrola de dulce de leche o dulce de membrillo?</p>
              <a href="#">Comprar</a>
            </div>
          </div>
        </section>
    )
}