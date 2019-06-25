import React, { Component } from "react";
import axios from "axios";
import Input from "./Input";
import ListTodo from "./ListTodo";
require("dotenv").config();

class Todo extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios
      .get("/api/todos")
      .then(res => {
        if (res.data) {
          this.setState({
            todos: res.data
          });
        }
      })
      .catch(err => console.log(err));
  };

  deleteTodo = id => {
    axios
      .delete(`https://todo-001.herokuapp.com/api/todos${id}`)
      .then(res => {
        if (res.data) {
          this.getTodos();
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    let { todos } = this.state;

    return (
      <div>
        <h1>My Todos</h1>
        <Input getTodos={this.getTodos} />
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Todo;
