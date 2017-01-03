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

        },
        {
          id: uuid(),
          text: 'Clean the yeard'
        },
        {
          id: uuid(),
          text: 'Get the mail',
        },
        {
          id: uuid(),
          text: 'Play video games'
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
          text: text
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

  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <TodoFilters onSearchTodos={this.handleSearch}></TodoFilters>
        <TodoList todos={todos}></TodoList>
        <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
      </div>
    )
  }
});

module.exports = TodoApp;
