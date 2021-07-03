import React, { Component } from 'react';

import '../form/form.css'

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            colorBody: 'blueviolet',
            bodySizeWidth: '200',
            bodySizHeight: '200',
            topRight: '50',
            topLeft: '50',
            bottomRight: '50',
            bottomLeft: '50',
            corBorda: '#000',
            offSetX: '0',
            offSetY: '0',
            blurRadius: '1',
            spreadRadius: '1',
            colorShadow: '#000',
            borderStyle: 'solid',
            espessuraBorda: '1px',
            relatorio: ''

        }



        this.handleChange = this.handleChange.bind(this);
        this.colorBodyChange = this.colorBodyChange.bind(this)
        this.borderTopLeftChange = this.borderTopLeftChange.bind(this);
        this.borderTopRightChange = this.borderTopRightChange.bind(this);
        this.borderBottomRightChange = this.borderBottomRightChange.bind(this);
        this.borderBottomLeftChange = this.borderBottomLeftChange.bind(this);
        this.colorBorderChange = this.colorBorderChange.bind(this)
        this.offSetXChange = this.offSetXChange.bind(this);
        this.offSetYChange = this.offSetYChange.bind(this);
        this.blurRadiusChange = this.blurRadiusChange.bind(this);
        this.spreadRadiusChange = this.spreadRadiusChange.bind(this);
        this.colorShadowChange = this.colorShadowChange.bind(this);
        this.borderStyleChange = this.borderStyleChange.bind(this);
        this.espessuraBordaChange = this.espessuraBordaChange.bind(this)
        this.larguraObjetoChange = this.larguraObjetoChange.bind(this)
        this.alturaObjetoChange = this.alturaObjetoChange.bind(this)
    }


    handleChange(event) {
        this.setState({ value: event.target.value });

    }

    borderTopLeftChange(event) {
        this.setState({ topLeft: event.target.value });
        // console.log("Borda Superior Esquerda: ", this.state.topLeft)
    }

    borderTopRightChange(event) {
        this.setState({ topRight: event.target.value });
        //console.log("Borda Superior Direita: ", this.state.topRight)
    }

    borderBottomRightChange(event) {
        this.setState({ bottomRight: event.target.value });
        //console.log("Borta Inferior Direita: ", this.state.bottomRight)
    }

    borderBottomLeftChange(event) {
        this.setState({ bottomLeft: event.target.value });
        //console.log("Borda Inferior Esquerda: ", this.state.bottomLeft)
    }

    colorBorderChange(event) {
        //console.log(event.target.value)
        this.setState({ colorBorder: event.target.value });
    }

    offSetXChange(event) {
        this.setState({ offSetX: event.target.value });
        //console.log("Borda Inferior Esquerda: ", this.state.bottomLeft)
    }

    offSetYChange(event) {
        this.setState({ offSetY: event.target.value });
        //console.log("Borda Inferior Esquerda: ", this.state.bottomLeft)
    }

    blurRadiusChange(event) {
        this.setState({ blurRadius: event.target.value });
        //console.log("Borda Inferior Esquerda: ", this.state.bottomLeft)
    }

    spreadRadiusChange(event) {
        this.setState({ spreadRadius: event.target.value });
        //console.log("Borda Inferior Esquerda: ", this.state.bottomLeft)
    }

    colorShadowChange(event) {
        //console.log(event.target.value)
        this.setState({ colorShadow: event.target.value });
    }

    colorBodyChange(event) {
        //console.log(event.target.value)
        this.setState({ colorBody: event.target.value });
    }

    borderStyleChange(event) {
        //console.log(event.target.value)
        this.setState({ borderStyle: event.target.value });
    }

    espessuraBordaChange(event) {
        //console.log(event.target.value)
        this.setState({ espessuraBorda: event.target.value });
    }

    larguraObjetoChange(event) {
        //console.log(event.target.value)
        this.setState({ bodySizeWidth: event.target.value });
    }

    alturaObjetoChange(event) {
        //console.log(event.target.value)
        this.setState({ bodySizeHeight: event.target.value });
    }

    resetForm() {
        this.setState({ topLeft: '50', topRight: '50', bottomRight: '50', bottomLeft: '50' });

    }



    relatorioForm() {
        alert("HTML + CSS em construção")

    }




    render() {
        return (
            <div>

                <div id="quadrado" style={{ backgroundColor: this.state.colorBody, borderTopLeftRadius: this.state.topLeft + 'px', borderTopRightRadius: this.state.topRight + 'px', borderBottomRightRadius: this.state.bottomRight + 'px', borderBottomLeftRadius: this.state.bottomLeft + 'px', borderColor: this.state.colorBorder, boxShadow: this.state.offSetX + 'px ' + this.state.offSetY + 'px ' + this.state.blurRadius + 'px ' + this.state.spreadRadius + 'px ' + this.state.colorShadow, borderWidth: this.state.espessuraBorda + 'px ', borderStyle: this.state.borderStyle }} ></div><br /><br />

                <form>


                    <div className="arredondamento">
                        <h3>Arrendondamento</h3>
                    Borda Superior-Esquerda<br />
                        <input type="range" onChange={this.borderTopLeftChange} min="0" max="100" /><br /><br />
                    Borda Superior-Direita<br />
                        <input type="range" onChange={this.borderTopRightChange} min="0" max="100" /><br /><br />
                    Borda Inferior-Direita<br />
                        <input type="range" onChange={this.borderBottomRightChange} min="0" max="100" /><br /><br />
                    Borda Inferior-Esquerda<br />
                        <input type="range" onChange={this.borderBottomLeftChange} min="0" max="100" /><br /><br />
                    </div>

                    <div className="sombreamento">
                        <h3>Sombreamento</h3>
                    Eixo X<br />
                        <input type="range" onChange={this.offSetXChange} min="0" max="100" /><br /><br />
                    Eixo Y<br />
                        <input type="range" onChange={this.offSetYChange} min="0" max="100" /><br /><br />
                    Arredondamendo Sombra <br />
                        <input type="range" onChange={this.blurRadiusChange} min="0" max="100" /><br /><br />
                    Alcance da Sombra<br />
                        <input type="range" onChange={this.spreadRadiusChange} min="0" max="100" /><br /><br />

                    </div>

                    <div className="coresFormas">
                        <h3>Cores e Formas</h3>
                    Cor da Forma<br />
                        <input type="color" onChange={this.colorBodyChange} /><br /><br />
                    Cor da Borda<br />
                        <input type="color" onChange={this.colorBorderChange} /><br /><br />
                    Cor da Sombra<br />
                        <input type="color" onChange={this.colorShadowChange} /><br /><br />


                    Estilo da Borda<br />
                        <select name="option" onChange={this.borderStyleChange}>
                            <option value="solid">solid</option>
                            <option value="dotted">dotted</option>
                            <option value="dashed">dashed</option>
                            <option value="double">double</option>
                            <option value="groove">groove</option>
                            <option value="ridge">ridge</option>
                            <option value="inset">inset</option>
                            <option value="outset">outset</option>

                        </select><br /><br />
                        Espessura da Borda<br />
                        <input type="range" onChange={this.espessuraBordaChange} min="0" max="100" step="0.1" defaultChecked="1" /><br /><br />
                    </div>

                </form>

                <form>
                    <input type="submit" id="gerarHtml" value="Gerar HTML" onClick={this.relatorioForm} />
                    <input type="submit" id="reset" value="Resetar" onSubmit={this.resetForm} />

                </form>


            </div>

        );




    }


}