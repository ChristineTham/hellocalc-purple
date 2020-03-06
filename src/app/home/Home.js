import React, { Component } from 'react';
// import { Line, Doughnut, Bar } from 'react-chartjs-2';
// import { Sparklines, SparklinesBars } from 'react-sparklines';
// import { ProgressBar, Dropdown } from 'react-bootstrap';

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate : new Date(),
      todos: [
        {
            id: 1,
            task: 'Pick up kids from school',
            isCompleted: false
        },
        {
            id: 2,
            task: 'Prepare for presentation',
            isCompleted: false
        },
        {
            id: 3,
            task: 'Print Statements',
            isCompleted: false
        },
        {
            id: 4,
            task: 'Create invoice',
            isCompleted: false
        },
        {
            id: 5,
            task: 'Call John',
            isCompleted: false
        }
    ],
    inputValue: '',
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  } 
  statusChangedHandler(event, id) {
    const todo = {...this.state.todos[id]};
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
        todos: todos
    })
}

addTodo (event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        task: this.state.inputValue,
        isCompleted: false
        
    })

    this.setState({
        todos: todos,
        inputValue: ''
    })
}

removeTodo (index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
        todos: todos
    })
}

inputChangeHandler(event) {
    this.setState({
        inputValue: event.target.value
    });
}
  
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-sm-6  grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Todo</h4>
                <form  className="add-items d-lg-flex" onSubmit={this.addTodo}>
                  <input 
                      type="text" 
                      className="form-control h-auto" 
                      placeholder="What do you need to do today?" 
                      value={this.state.inputValue} 
                      onChange={this.inputChangeHandler}
                      required />
                  <button type="submit" className="btn btn-primary font-weight-bold ml-0 mt-2 mt-lg-0">Add</button>
                </form>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column todo-list todo-padding-lg">
                    {this.state.todos.map((todo, index) =>{
                        return <ListItem 
                        isCompleted={todo.isCompleted}
                        changed={(event) => this.statusChangedHandler(event, index)}
                        key={todo.id}
                        remove={() => this.removeTodo(index) }
                        >{todo.task}</ListItem>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
const ListItem = (props) => {
  return (
      <li className={(props.isCompleted ? 'completed' : null)}>
          <div className="form-check form-check-primary m-0 align-items-start">
              <label htmlFor="" className="form-check-label font-weight-medium"> 
                  <input className="checkbox" type="checkbox" 
                      checked={props.isCompleted} 
                      onChange={props.changed} 
                      /> {props.children} <i className="input-helper"></i>
              </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
      </li>
  )
};
export default Home;