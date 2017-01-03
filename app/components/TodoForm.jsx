var React = require('react');

var TodoForm = React.createClass({
  handleAddTodo: function(e) {
    e.preventDefault();
    
    var newTodo = this.refs.todo.value;
    this.refs.todo.value = '';

    console.log('handleAddTodo', newTodo)
  },

  render: function () {
    return (
      <div>
        <form action="" onSubmit={this.handleAddTodo}>
          <input ref="todo" type="text" placeholder="Add todo item"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoForm;
