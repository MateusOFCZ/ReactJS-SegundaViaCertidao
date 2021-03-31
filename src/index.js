import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputMask from 'react-input-mask';

class Documento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      matricula: "",
      data_extenso: "",
      dia: "",
      mes: "",
      ano: "",
      hora: "",
      municipio_nascimento: "",
      municipio_registro: "",
      local_nascimento: "",
      sexo: "",
      filiacao_mae: "",
      filiacao_pai: "",
      avo_1_pai: "",
      avo_2_pai: "",
      avo_1_mae: "",
      avo_2_mae: "",
      gemeo: "",
      nome_matriula_gemeo: "",
      data_registro_extenso: "",
      declaracao_nascido_vivo: "",
      observacoes_averbacoes: "",
    };
  }

  VerificarCampos = () => {
    var C1 = document.getElementById('preenchimento_nome').value;
    var C2 = document.getElementById('preenchimento_sobrenome').value;
    var C3 = document.getElementById('preenchimento_matricula').value;
    var C4 = document.getElementById('preenchimento_data_extenso').value;
    var C5 = document.getElementById('preenchimento_dia').value;
    var C6 = document.getElementById('preenchimento_mes').value;
    var C7 = document.getElementById('preenchimento_ano').value;
    var C8 = document.getElementById('preenchimento_hora').value;
    var C9 = document.getElementById('preenchimento_municipio_nascimento').value;
    var C10 = document.getElementById('preenchimento_municipio_registro').value;
    var C11 = document.getElementById('preenchimento_local_nascimento').value;
    var C12 = document.getElementById('preenchimento_sexo').value;
    var C13 = document.getElementById('preenchimento_filiacao_mae').value;
    var C14 = document.getElementById('preenchimento_filiacao_pai').value;
    var C15 = document.getElementById('preenchimento_avo_1_pai').value;
    var C16 = document.getElementById('preenchimento_avo_2_pai').value;
    var C17 = document.getElementById('preenchimento_avo_1_mae').value;
    var C18 = document.getElementById('preenchimento_avo_2_mae').value;
    var C19 = document.getElementById('preenchimento_gemeo').value;
    var C20 = document.getElementById('preenchimento_nome_matricula_gemeo').value;
    var C21 = document.getElementById('preenchimento_data_registro_extenso').value;
    var C22 = document.getElementById('preenchimento_declaracao_nascido_vivo').value;

    if(C19 === "NÃO"){
      document.getElementById('preenchimento_nome_matricula_gemeo').value = "NADA CONSTA";
    }

    if(C19 === "SIM" && C20 === "NADA CONSTA"){
      document.getElementById('preenchimento_nome_matricula_gemeo').value = "";
    }

    if(C1 === "" || C2 === "" || C3 === "" || C4 === "" || C5 === "" || C6 === "" || C7 === "" || C8 === "" || C9 === "" || C10 === "" || C11 === "" || C12 === "" || C13 === "" || C14 === "" || C15 === "" || C16 === "" || C17 === "" || C18 === "" || C19 === "" || C20 === "" || C21 === "" || C22 === "" || C3.length !== 37 || C3.includes("_") || C5.length !== 2 || C5.includes("_") || C6.length !== 2 || C6.includes("_") || C7.length !== 4 || C7.includes("_") || C8.length !== 5 || C8.includes("_")) {
      document.getElementById('Botao_Enviar').disabled = true;
      document.getElementById('Botao_Enviar').style.cursor = "not-allowed";
    } else {
      document.getElementById('Botao_Enviar').disabled = false;
      document.getElementById('Botao_Enviar').style.cursor = "pointer";
    }
  }

  DisableGemeo = () => {
    document.getElementById('preenchimento_nome_matricula_gemeo').setAttribute("type", "hidden");
    document.getElementById('titulo_nome_matricula_gemeo').style.visibility = "hidden";
    document.getElementById('preenchimento_gemeo').style.marginBottom = "-100px";
    document.getElementById('preenchimento_nome_matricula_gemeo').value = "NADA CONSTA";
  }

  InputSend = () => {
    this.VerificarCampos();

    this.setState({nome: document.getElementById('preenchimento_nome').value});
    this.setState({sobrenome: document.getElementById('preenchimento_sobrenome').value});
    this.setState({matricula: document.getElementById('preenchimento_matricula').value});
    this.setState({data_extenso: document.getElementById('preenchimento_data_extenso').value});
    this.setState({dia: document.getElementById('preenchimento_dia').value});
    this.setState({mes: document.getElementById('preenchimento_mes').value});
    this.setState({ano: document.getElementById('preenchimento_ano').value});
    this.setState({hora: document.getElementById('preenchimento_hora').value});
    this.setState({municipio_nascimento: document.getElementById('preenchimento_municipio_nascimento').value});
    this.setState({municipio_registro: document.getElementById('preenchimento_municipio_registro').value});
    this.setState({local_nascimento: document.getElementById('preenchimento_local_nascimento').value});
    this.setState({sexo: document.getElementById('preenchimento_sexo').value});
    this.setState({filiacao_mae: document.getElementById('preenchimento_filiacao_mae').value});
    this.setState({filiacao_pai: document.getElementById('preenchimento_filiacao_pai').value});
    this.setState({avo_1_pai: document.getElementById('preenchimento_avo_1_pai').value});
    this.setState({avo_2_pai: document.getElementById('preenchimento_avo_2_pai').value});
    this.setState({avo_1_mae: document.getElementById('preenchimento_avo_1_mae').value});
    this.setState({avo_2_mae: document.getElementById('preenchimento_avo_2_mae').value});
    this.setState({gemeo: document.getElementById('preenchimento_gemeo').value});
    this.setState({nome_matriula_gemeo: document.getElementById('preenchimento_nome_matricula_gemeo').value});
    this.setState({data_registro_extenso: document.getElementById('preenchimento_data_registro_extenso').value});
    this.setState({declaracao_nascido_vivo: document.getElementById('preenchimento_declaracao_nascido_vivo').value});
    this.setState({observacoes_averbacoes: document.getElementById('preenchimento_observacoes_averbacoes').value});

    if(document.getElementById('preenchimento_gemeo').value === "NÃO" || document.getElementById('preenchimento_gemeo').value === ""){
      this.DisableGemeo();
    } else if(document.getElementById('preenchimento_gemeo').value === "SIM") {
      document.getElementById('preenchimento_nome_matricula_gemeo').removeAttribute("type", "hidden");
      document.getElementById('titulo_nome_matricula_gemeo').style.visibility = "visible";
      document.getElementById('preenchimento_gemeo').style.marginBottom = "10px";
    }
  }

  LimparPreenchimentoGemeo = () => {
    document.getElementById('preenchimento_nome_matricula_gemeo').value = "";
  }

  LimparCampos = () => {
    document.getElementById('preenchimento_nome').value = "";
    document.getElementById('preenchimento_sobrenome').value = "";
    document.getElementById('preenchimento_matricula').value = "";
    document.getElementById('preenchimento_data_extenso').value = "";
    document.getElementById('preenchimento_dia').value = "";
    document.getElementById('preenchimento_mes').value = "";
    document.getElementById('preenchimento_ano').value = "";
    document.getElementById('preenchimento_hora').value = "";
    document.getElementById('preenchimento_municipio_nascimento').value = "";
    document.getElementById('preenchimento_municipio_registro').value = "";
    document.getElementById('preenchimento_local_nascimento').value = "";
    document.getElementById('preenchimento_sexo').value = "";
    document.getElementById('preenchimento_filiacao_mae').value = "";
    document.getElementById('preenchimento_filiacao_pai').value = "";
    document.getElementById('preenchimento_avo_1_pai').value = "";
    document.getElementById('preenchimento_avo_2_pai').value = "";
    document.getElementById('preenchimento_avo_1_mae').value = "";
    document.getElementById('preenchimento_avo_2_mae').value = "";
    document.getElementById('preenchimento_gemeo').value = "";
    document.getElementById('preenchimento_nome_matricula_gemeo').value = "";
    document.getElementById('preenchimento_data_registro_extenso').value = "";
    document.getElementById('preenchimento_declaracao_nascido_vivo').value = "";
    document.getElementById('preenchimento_observacoes_averbacoes').value = "";

    this.InputSend();
  }

  PaginaCarregada = () => {
    this.VerificarCampos();
    this.LimparCampos();
    this.DisableGemeo();
  }

  render() {
    return (
      <div class="container" onLoad={this.PaginaCarregada}>
        <div class="Head">
          <p class="Titulo">SEGUNDA VIA - CERTIDÃO DE NASCIMENTO</p>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="no_margin">
              <form method="get" target="_blank">
                <p class="Input_Titulo">NOME:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_nome" onChange={this.InputSend}/>
                <p class="Input_Titulo">SOBRENOME:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_sobrenome" onChange={this.InputSend}/>
                <p class="Input_Titulo">MATRÍCULA:</p>
                <InputMask class="Input_Preenchimento" id="preenchimento_matricula" onChange={this.InputSend} mask="999999 99 9999 9 99999 999 9999999 99"/>
                <p class="Input_Titulo">DATA DE NASCIMENTO POR EXTENSO:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_data_extenso" onChange={this.InputSend}/>
                <div class="row">
                  <div class="col-sm-1">
                    <p class="Input_Titulo Margin_Left_Data_Dia">DIA:</p>
                    <InputMask class="Input_Preenchimento_Datas Margin_Left_Data_Dia" id="preenchimento_dia" onChange={this.InputSend} mask="99"/>
                  </div>
                  <div class="col-sm-1">
                    <p class="Input_Titulo Margin_Left_Data_Mes">MÊS:</p>
                    <InputMask class="Input_Preenchimento_Datas Margin_Left_Data_Mes" id="preenchimento_mes" onChange={this.InputSend} mask="99"/>
                  </div>
                  <div class="col-sm-1">
                    <p class="Input_Titulo Margin_Left_Data_Ano">ANO:</p>
                    <InputMask class="Input_Preenchimento_Datas Margin_Left_Data_Ano" id="preenchimento_ano" onChange={this.InputSend} mask="9999"/>
                  </div>
                  <div class="col-sm-1">
                    <p class="Input_Titulo Margin_Left_Hora">HORA:</p>
                    <InputMask class="Input_Preenchimento_Hora Margin_Left_Hora" type="text" id="preenchimento_hora" onChange={this.InputSend} mask="99:99"/>
                  </div>
                  <div class="col-sm-1">
                    <p class="Input_Titulo Margin_Left_Sexo">SEXO:</p>
                    <select class="Input_Preenchimento_Select_Sexo Margin_Left_Sexo" type="text" id="preenchimento_sexo" onChange={this.InputSend}>
                      <option value="">SELECIONE</option>
                      <option value="MASCULINO">MASCULINO</option>
                      <option value="FEMININO">FEMININO</option>
                    </select>
                  </div>
                </div>
                <p class="Input_Titulo">MUNICÍPIO DE NASCIMENTO E UNIDADE DA FEDERAÇÃO:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_municipio_nascimento" onChange={this.InputSend}/>
                <p class="Input_Titulo">MUNICÍPIO DE REGISTRO E UNIDADE DA FEDERAÇÃO:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_municipio_registro" onChange={this.InputSend}/>
                <p class="Input_Titulo">LOCAL DE NASCIMENTO:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_local_nascimento" onChange={this.InputSend}/>
                <p class="Input_Titulo">FILIAÇÃO PAI:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_filiacao_pai" onChange={this.InputSend}/>
                <p class="Input_Titulo">FILIAÇÃO MÃE:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_filiacao_mae" onChange={this.InputSend}/>
                <p class="Input_Titulo">AVÔ PARTE DE PAI:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_avo_1_pai" onChange={this.InputSend}/>
                <p class="Input_Titulo">AVÓ PARTE DE PAI:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_avo_2_pai" onChange={this.InputSend}/>
                <p class="Input_Titulo">AVÔ PARTE DE MÃE:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_avo_1_mae" onChange={this.InputSend}/>
                <p class="Input_Titulo">AVÓ PARTE DE MÃE:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_avo_2_mae" onChange={this.InputSend}/>
                <p class="Input_Titulo">GÊMEO:</p>
                <select class="Input_Preenchimento_Select" type="text" id="preenchimento_gemeo" onChange={this.InputSend}>
                  <option value="">SELECIONE</option>
                  <option value="NÃO">NÃO</option>
                  <option value="SIM">SIM</option>
                </select>
                <p class="Input_Titulo" id="titulo_nome_matricula_gemeo">NOME E MATRÍCULA DO(S) GÊMEO(S):</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_nome_matricula_gemeo" onChange={this.InputSend}/>
                <p class="Input_Titulo">DATA DO REGISTRO POR EXTENSO:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_data_registro_extenso" onChange={this.InputSend}/>
                <p class="Input_Titulo">NÚMERO DA DECLARAÇÃO DE NASCIDO VIVO:</p>
                <input class="Input_Preenchimento" type="text" id="preenchimento_declaracao_nascido_vivo" onChange={this.InputSend}/>
                <p class="Input_Titulo">OBSERVAÇÕES AVERBAÇÕES:</p>
                <textarea rows="4" class="Input_Preenchimento" type="text" id="preenchimento_observacoes_averbacoes" onChange={this.InputSend}/>
                <div class="row">
                  <div class="col-sm-5">
                    <input id="Botao_Enviar" class="Enviar" type="submit" value="Enviar"/>
                  </div>
                  <div class="col-sm-5">
                    <input class="Limpar_Campos" type="button" onClick={this.LimparCampos} value="Limpar Campos"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-8 Form">
            <div class="Topo">
              <img class="Logo" src="https://seeklogo.com/images/B/brasao-da-republica-do-brasil-logo-F668D19105-seeklogo.com.png"/>
              <p class="Texto_1">REGISTRO CIVIL DAS PESSOAS NATURAIS</p>
              <p class="Texto_2">CERTIDÃO DE NASCIMNETO</p>
              <p class="Nome_Matricula">NOME:</p>
              <p class="Nome_Matricula">{this.state.nome} {this.state.sobrenome}</p>
              <div class="Espaco"/>
              <p class="Nome_Matricula">MATRÍCULA</p>
              <p class="Nome_Matricula">{this.state.matricula}</p>
              <div class="Espaco"/>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <p class="Data_Extenso">DATA DE NASCIMENTO POR EXTENSO</p>
                <input class="Input_Data_Extenso" type="text" id="vizualizacao_data_extenso" value={this.state.data_extenso} disabled/>
              </div>
              <div class="col-sm-1">
                <p class="Data">DIA</p>
                <input class="Input_Data" type="text" id="vizualizacao_dia" value={this.state.dia} disabled/>
              </div>
              <div class="col-sm-1">
                <p class="Data">MÊS</p>
                <input class="Input_Data" type="text" id="vizualizacao_mes" value={this.state.mes} disabled/>
              </div>
              <div class="col-sm-1">
                <p class="Data">ANO</p>
                <input class="Input_Data" type="text" id="vizualizacao_ano" value={this.state.ano} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col-sm-1">
                <p class="Hora">HORA</p>
                <input class="Input_Hora" type="text" id="vizualizacao_hora" value={this.state.hora} disabled/>
              </div>
              <div class="col-sm-10">
                <p class="Municipio_Nascimento">MUNICÍPIO DE NASCIMENTO E UNIDADE DA FEDERAÇÃO</p>
                <input class="Input_Municipio_Nascimento" type="text" id="vizualizacao_municipio_nascimento" value={this.state.municipio_nascimento} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col-sm-7">
                <p class="Municipio_Registro">MUNICÍPIO DE REGISTRO E UNIDADE DA FEDERAÇÃO</p>
                <input class="Input_Municipio_Registro" type="text" id="vizualizacao_municipio_registro" value={this.state.municipio_registro} disabled/>
              </div>
              <div class="col-sm-5">
                <p class="Local_Nascimento">LOCAL DE NASCIMENTO</p>
                <input class="Input_Local_Nascimento" type="text" id="vizualizacao_local_nascimento" value={this.state.local_nascimento} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col-sm-1">
                <p class="Sexo">SEXO</p>
                <input class="Input_Sexo" type="text" id="vizualizacao_sexo" value={this.state.sexo} disabled/>
              </div>
              <div class="col-sm-4">
                <p class="Filiacao_Pai">FILIAÇÃO PAI</p>
                <input class="Input_Filiacao_Pai" type="text" id="vizualizacao_filiacao_pai" value={this.state.filiacao_pai} disabled/>
              </div>
              <div class="col-sm-4">
                <p class="Filiacao_Mae">FILIAÇÃO MÃE</p>
                <input class="Input_Filiacao_Mae" type="text" id="vizualizacao_filiacao_mae" value={this.state.filiacao_mae} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col-sm-5">
                <p class="Avo_1_Pai">AVÔ PARTE DE PAI</p>
                <input class="Input_Avo_1_Pai" type="text" id="vizualizacao_avo_1_pai" value={this.state.avo_1_pai} disabled/>
              </div>
              <div class="col-sm-5">
                <p class="Avo_2_Pai">AVÓ PARTE DE PAI</p>
                <input class="Input_Avo_2_Pai" type="text" id="vizualizacao_avo_2_pai" value={this.state.avo_2_pai} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col-sm-5">
                <p class="Avo_1_Mae">AVÔ PARTE DE MÃE</p>
                <input class="Input_Avo_1_Mae" type="text" id="vizualizacao_avo_1_mae" value={this.state.avo_1_mae} disabled/>
              </div>
              <div class="col-sm-5">
                <p class="Avo_2_Mae">AVÓ PARTE DE MÃE</p>
                <input class="Input_Avo_2_Mae" type="text" id="vizualizacao_avo_2_mae" value={this.state.avo_2_mae} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col-sm-1">
                <p class="Gemeo">GÊMEO</p>
                <input class="Input_Gemeo" type="text" id="vizualizacao_gemeo" value={this.state.gemeo} disabled/>
              </div>
              <div class="col-sm-8">
                <p class="Nome_Matricula_Gemeo">NOME E MATRÍCULA DO(S) GÊMEO(S)</p>
                <input class="Input_Nome_Matricula_Gemeo" type="text" id="vizualizacao_nome_matricula_gemeo" value={this.state.nome_matriula_gemeo} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col">
                <p class="Data_Registro_Extenso">DATA DO REGISTRO POR EXTENSO</p>
                <input class="Input_Data_Registro_Extenso" type="text" id="vizualizacao_data_registro_extenso" value={this.state.data_registro_extenso} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col">
                <p class="Declaracao_Nascido_Vivo">NÚMERO DA DECLARAÇÃO DE NASCIDO VIVO</p>
                <input class="Input_Declaracao_Nascido_Vivo" type="text" id="vizualizacao_declaracao_nascido_vivo" value={this.state.declaracao_nascido_vivo} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
            <div class="row">
              <div class="col">
                <p class="Observacoes_Averbacoes">OBSERVAÇÕES AVERBAÇÕES</p>
                <textarea rows="4" class="TextArea_Observacoes_Averbacoes" type="text" id="vizualizacao_observacoes_averbacoes" value={this.state.observacoes_averbacoes} disabled/>
              </div>
            </div>
            <div class="Espaco"/>
          </div>
        </div>
        <div class="Espaco"/>
      </div>
    );
  }
}

ReactDOM.render(<Documento />, document.getElementById('doc'));