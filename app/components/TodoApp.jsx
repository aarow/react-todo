var React = require('react');
var TodoFilters = require('TodoFilters');
var TodoForm = require('TodoForm');
var TodoList = require('TodoList');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: true
        },
        {
          id: uuid(),
          text: 'Clean the yeard',
          completed: false
        },
        {
          id: uuid(),
          text: 'Get the mail',
          completed: false
        },
        {
          id: uuid(),
          text: 'Play video games',
          completed: false
        }
      ]
    }
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
