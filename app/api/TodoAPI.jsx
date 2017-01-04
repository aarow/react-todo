var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var strTodos = localStorage.getItem('todos');
    var todos = [];

    // parse can fail badly
    try {
      todos = JSON.parse(strTodos);
    } catch(e) {
      // do nothing
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;
    var searchText = searchText.toLowerCase();

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // sort with non-completed first
    filteredTodos.sort((a, b) => {
      return a.completed - b.completed;
    });

    return filteredTodos;
  }
}
