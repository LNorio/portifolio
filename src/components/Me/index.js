import React from 'react'

import Button from "../Button"
import MyPhoto from "../../assets/images/MyPhoto.jpg"
import Perfil from "../Perfil"

import "./styles.css"

const Me = () => {
    return (
        <section id="me">
            <div id="second-column">
                <img id="photo" src={MyPhoto} alt="Foto de Perfil"/>
                <p>Sou <strong>Leonardo Norio Yamasaki Cruz</strong>. Nasci em Dourados-MS e atualmente sou estudante da UTFPR-Cornelio Procopio.</p>
                <Button/>
            </div>
            <Perfil/>
        </section>
    )
}

export default Me
