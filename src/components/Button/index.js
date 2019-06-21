import React, { Component } from 'react'
import "./styles.css"
import Curriculo from "../../assets/others/Curriculo.pdf"

export default class index extends Component {
    render() {
        return (
            <>
              <a class="but" href={Curriculo} download="Curriculo"><button>Curriculo</button></a>
            </>
        )
    }
}

