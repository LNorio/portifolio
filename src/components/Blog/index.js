import React from 'react'
import Scarlett from "../../assets/images/Scarlett.jpg"
import E3 from "../../assets/images/E3-2019.jpg"
import Google from "../../assets/images/Google.jpg"
import "./styles.css"

const Blog = () => {
    return (
        <section id="blog">
            <h2>Blog</h2>
            <div id="row2">
                <div>
                    <a href="https://www.techtudo.com.br/noticias/2019/06/project-scarlett-tudo-sobre-o-novo-xbox-que-sera-lancado-em-2020.ghtml" target="_blank" rel="noopener noreferrer">
                        <img src={Scarlett} alt="Projeto Scarlett"/>
                    </a>
                    <h3>Projeto Scarlett</h3>
                    <p>Projeto anunciado pela microsoft para ser o sucessor do Xbox One X</p>
                </div>
                <div>
                <a href="https://www.opovo.com.br/vidaearte/2019/06/21/e3-2019--confira-novidades-da-maior-feira-gamer-do-mundo.html" target="_blank" rel="noopener noreferrer">
                        <img src={E3} alt="Logo E3 2019"/>
                    </a>
                    <h3>E3 2019</h3>
                    <p>Novidades sobre a maior feira de jogos do mundo</p>
                </div>
                <div>
                    <a href="https://g1.globo.com/economia/tecnologia/blog/altieres-rohr/post/2019/06/21/google-libera-extensao-para-facilitar-denuncia-de-sites-maliciosos.ghtml" target="_blank" rel="noopener noreferrer">
                        <img src={Google} alt="Logo Chorme"/>
                    </a>
                    <h3>Safe Browsing</h3>
                    <p>Google libera uma extensão do Chrome para ajudar a denunciar sites maliciosos</p>
                </div>
            </div>
        </section>
    )
}

export default Blog
