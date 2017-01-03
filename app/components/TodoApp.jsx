var React = require('react');
var TodoFilters = require('TodoFilters');
var TodoForm = require('TodoForm');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <TodoFilters></TodoFilters>
        <TodoList></TodoList>
        <TodoForm></TodoForm>
      </div>
    )
  }
});

module.exports = TodoApp;
