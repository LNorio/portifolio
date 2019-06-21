import React from 'react'
import Geovanna from "../../assets/images/Geovanna.jpg"
import SODM from "../../assets/images/SODM.jpg"

import "./styles.css"

const Projects = () => {
    return (
        <section id="project">
            <h2>Projetos</h2>
            <div id="my-proj">
                <div>
                    <img src={Geovanna} alt="Logo do site Geovanna Garcia"/>
                    <h3>Site Geovanna Garcia</h3>
                </div>
                <div>
                    <img src={SODM} alt="Logo do projeto SODM"/>
                    <h3>SODM</h3>
                </div>
            </div>
        </section>
    )
}

export default Projects
