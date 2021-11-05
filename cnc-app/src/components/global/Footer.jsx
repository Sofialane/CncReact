import React from 'react'
import FeatherIcon from 'feather-icons-react';


import logocnc from '../../assets/images/transparentlogocnc.png';

export const Footer = () => {
    return (
        <footer>
            <section className="logo-footer">
                <img src={logocnc} alt="Logo CNC"/>
            </section>
            <section id="ubicacion">
                <h3>Ubicacion</h3>
                <p>Nos encontramos ubicados para retiro de pedidos en Ciudad de la Costa.</p>
            </section>
            <section id="redes">
                <h3>Seguinos en nuestras redes!</h3>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/caminoyacreaciones/">
                        <FeatherIcon icon="instagram" />

                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/caminoyacreaciones">
                        <FeatherIcon icon="facebook" />
                        </a>
                    </li>
                </ul>
            </section>

        </footer>
    )
}
export default Footer;