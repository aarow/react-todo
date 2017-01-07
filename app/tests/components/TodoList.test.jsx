var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoList', () => {
  it('should exist', () => {
      expect(TodoList).toExist();
  });

  it('should render one TodoItem for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'do something'
      },
      {
        id: 2,
        text: 'do something else'
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render "nothing to do" if no todos found', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);

    var $el = $(ReactDOM.findDOMNode(todoList));


    expect($el.find('.container__message').length).toBe(1);
  });
});
