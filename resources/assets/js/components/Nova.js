import React, {Component} from 'react';

class Nova extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            cidade: '',
            tipo_inst: '',
            referencia: '',
            tel: '',
            tasks: [],
            quantity1: "0",
            quantity2: "0"
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.renderTasks = this.renderTasks.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
        //this.renderform= this.renderform.bind(this);
    }
    // handle change
    handleChange(e) {
        this.setState({
           [e.target.name]: e.target.value
        });
      console.log(e.target.value);
    }
    // handle submit
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post("tasks", {
                name: this.state.name,
                cidade: this.state.cidade,
                tipo_inst: this.state.tipo_inst,
                referencia: this.state.referencia,
                tel: this.state.tel,
                quantity1: this.state.quantity1,
                quantity2: this.state.quantity2
            })
            .then(response => {
                // console.log('from handle sumit', response);
                this.props.history.push('/');
            });
    }
    render() {
 
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Fazer requisição</div>
                            <div className="card-body" >
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <p>Instituição:</p>
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            className="form-control"
                                            rows="1"
                                            name="name"
                                            maxLength="255"
                                            placeholder="Nome da instituição"
                                            required

                                        />

                                        <div class="form-group row">
                                            <div class="col-10">
                                                <p> </p>
                                                <p>Celular (com Whatsapp):</p>
                                                <input onChange={this.handleChange} value={this.state.tel} name="tel" class="form-control" type="tel" placeholder="(55)-55555-5555" id="example-tel-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-10">
                                                <p>Cidade:</p>
                                                <input onChange={this.handleChange} value={this.state.cidade} class="form-control" name="cidade" type="text" placeholder="Nome da cidade" id="example-tel-input" />
                                            </div>
                                        </div>
                                        <p>Vocês são considerados pela secretaria municipal
                                de saúde ponto de referência no atendimento ao COVID-19?</p>
                                        <fieldset class="form-group">
                                            <div class="row">
                                                <div class="col-sm-10">
                                                    <div class="form-check">
                                                        <input class="form-check-input" onChange={this.handleChange} value="Sim" type="radio" name="referencia" id="gridRadios1" />
                                                        <label class="form-check-label" for="gridRadios1">
                                                            Sim
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" onChange={this.handleChange} value="Não" type="radio" name="referencia" id="gridRadios2" />
                                                        <label class="form-check-label" for="gridRadios2">
                                                            Não
                                                         </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <p>Tipo de instituição:</p>
                                        <fieldset class="form-group" >
                                            <div class="row">

                                                <div class="col-sm-10">
                                                    <div class="form-check">
                                                        <input class="form-check-input" onChange={this.handleChange} value="Pública" type="radio" name="tipo_inst" id="gridRadios1" />
                                                        <label class="form-check-label" for="gridRadios1">
                                                            Pública
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" onChange={this.handleChange} value="Privada" type="radio" name="tipo_inst" id="gridRadios2" />
                                                        <label class="form-check-label" for="gridRadios2">
                                                            Privada
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" onChange={this.handleChange} value="Privada sem fins lucrativos" type="radio" name="tipo_inst" id="gridRadios3" />
                                                        <label class="form-check-label" for="gridRadios3">
                                                            Privada sem fins lucrativos
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" onChange={this.handleChange} type="radio" name="tipo_inst" id="gridRadios3" value="Outra" />
                                                        <label class="form-check-label" for="gridRadios3">
                                                            Outra
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </fieldset>
                                        <p>Como nossa produção é limitada, principalmente devido a
                                        escassez de insumos, indique o número de pessoas que trabalham diretamente com
                                         os suspeitos de COVID-19. Consideramos essa entrega como emergencial:</p>
                                        <input onChange={this.handleChange} name="quantity1" value={this.state.quantity1} type="number" min="1" max="50"></input>
                                        <p>Quantidade não emergencial:</p>
                                        <input onChange={this.handleChange} value={this.state.quantity2} type="number" name="quantity2" min="1" max="50"></input>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Criar
                                    </button>
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Nova;