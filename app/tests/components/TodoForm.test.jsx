var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoForm = require('TodoForm');

describe('TodoForm', () => {
  it('should exist', () => {
      expect(TodoForm).toExist();
  });

  it('should call addtodo prop with valid data', () => {
    var todoText = 'check mail';
    var spy = expect.createSpy();

    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call addtodo prop when invalid input', () => {
    var spy = expect.createSpy();

    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value = '';

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
