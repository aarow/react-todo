var React = require('react');
var TodoFilters = require('TodoFilters');
var TodoForm = require('TodoForm');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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

  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <TodoFilters></TodoFilters>
        <TodoList todos={todos}></TodoList>
        <TodoForm></TodoForm>
      </div>
    )
  }
});

module.exports = TodoApp;
