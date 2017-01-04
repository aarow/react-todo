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

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searchText

    // sort with non-completed first

    return filteredTodos;
  }
}
