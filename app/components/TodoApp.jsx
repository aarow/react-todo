var React = require('react');
var TodoFilters = require('TodoFilters');
var TodoForm = require('TodoForm');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog',

        },
        {
          id: 2,
          text: 'Clean the yeard'
        },
        {
          id: 3,
          text: 'Get the mail',
        },
        {
          id: 4,
          text: 'Play video games'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    var todos = this.state.todos;

    todos.push({
      id: 5,
      text: text
    });

    this.setState({
      todos: todos
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
