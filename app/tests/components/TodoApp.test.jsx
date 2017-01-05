var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
      expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'Here is a test';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);

    todoApp.setState({
      todos: []
    });

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handletoggle is called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);

    todoApp.setState({
      todos: [todoData]
    });

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    // call handle toggle with 11
    todoApp.handleToggle(11);
    // check that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });


  // test when toggle from true to false, completedAt get undefined
  it('should toggle completedAt to false when complete is toggled false', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 0
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);

    todoApp.setState({
      todos: [todoData]
    });

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(true);
    // call handle toggle with 11
    todoApp.handleToggle(11);
    // check that value changed
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
