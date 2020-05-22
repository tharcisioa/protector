import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

class App extends Component {
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
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
       // this.renderform= this.renderform.bind(this);
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
                this.setState({
                    tasks: [response.data, ...this.state.tasks],
                    name: '',
                    cidade: '',
                    tipo_inst: '',
                    referencia: '',
                    tel: '',
                    quantity1: "0",
                    quantity2: "0"
                });
            });
    }
    // render tasks
    renderTasks() {
        return this.state.tasks.map(task => (
            <div key={task.id} className="media">
                <div className="media-body">
                    <div>
                        {task.name}{" "}
                        <span className="text-muted">
                            <br />
                            por {task.user.name} |{" "}
                            {task.created_at
                                .split("T")
                                .slice(0, 1)}
                        </span>
                        {/*<Link
                            to={`/${task.id}/edit`}
                            className="btn btn-sm btn-success float-right"
                        >
                            Editar
                        </Link> */}
                        <button
                            onClick={() => this.handleDelete(task.id)}
                            className="btn btn-sm btn-warning float-right"
                        >
                            Remover
                        </button>
                    </div>
                    <hr />
                </div>
            </div>
        ));
    }
    // get all the tasks from backend
    getTasks() {
        axios.get("/tasks").then(response =>
            this.setState({
                tasks: [...response.data.tasks]
            })
        );
    }
    // lifecycle mehtod
    UNSAFE_componentWillMount() {
        this.getTasks();
    }
    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updatedTasks });
        // make delete request to the backend
        axios.delete(`/tasks/${id}`);
    }

    render(){
        return(
            <div className="card-body">
             <hr />
          {this.renderTasks()}
        <Link
         to={`/nova`}
            className="btn btn-primary btn-block"
        >
            Nova Solicitação
        </Link>
        </div>
        );
    }

}

export default App;
