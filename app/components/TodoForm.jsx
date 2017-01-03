var React = require('react');

var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var newTodoText = this.refs.todoText.value;

    if(newTodoText.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(newTodoText);
    }
    this.refs.todoText.focus();
  },

  render: function () {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="What do you need to do?"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoForm;
