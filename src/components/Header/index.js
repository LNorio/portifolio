import React from 'react'
import "./styles.css"

const Header = () => {
    return (
        <section id="header">
            <ul>
                <li>
                    <a href="#me">Sobre mim</a>
                </li>
                <li>
                    <a href="#skill">Habilidades</a>
                </li>
                <li>
                    <a href="#project">Projetos</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#history">Biografia</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </section>
    )
}

export default Header