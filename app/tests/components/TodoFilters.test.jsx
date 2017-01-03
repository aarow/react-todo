var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoFilters = require('TodoFilters');

describe('TodoFilters', () => {
  it('should exist', () => {
      expect(TodoFilters).toExist();
  });

  it('should call function Search with entered input text', () => {
    var searchText = 'dog';
    var spy = expect.createSpy();
    var todoFilters = TestUtils.renderIntoDocument(<TodoFilters onSearchTodos={spy} />);

    todoFilters.refs.searchTodos.value = searchText;

    TestUtils.Simulate.change(todoFilters.refs.searchTodos);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call function Search with proper checked value', () => {
    var spy = expect.createSpy();
    var todoFilters = TestUtils.renderIntoDocument(<TodoFilters onSearchTodos={spy} />);

    todoFilters.refs.showCompletedTodos.checked = true;

    TestUtils.Simulate.change(todoFilters.refs.searchTodos);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
