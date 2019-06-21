import React from 'react'

import "./styles.css"

const Contact = () => {
    return (
        <section id= "contact">
            <h2>Contato</h2>
            <h3>Entre em contato comigo</h3>
             <form action="https://formspree.io/leonardocruz@alunos.utfpr.edu.br" method="POST">
                <input type="text" name="name" placeholder="Nome"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="text" name="topic" placeholder="Assunto"/>
                <textarea id="msgText" name="text" rows="5" cols="40" placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
             </form>
        </section>
    )
}

export default Contact
