var React = require('react');
var uuid = require('node-uuid');

var TodoFilters = require('TodoFilters');
var TodoForm = require('TodoForm');
var TodoList = require('TodoList');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },

  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },

  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },

  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <TodoFilters onSearchTodos={this.handleSearch}></TodoFilters>
        <TodoList todos={todos} onToggle={this.handleToggle}></TodoList>
        <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
      </div>
    )
  }
});

module.exports = TodoApp;
