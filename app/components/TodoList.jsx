var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({


  render: function () {
    var {todos} = this.props;
    var renderTodoItems = () => {
      return todos.map((todo) => {
        return (
          <li key={todo.id} >
            <TodoItem {...todo} onToggle={this.props.onToggle}></TodoItem>
          </li>
        );
      });
    };

    return (
      <div>
        <ol>
          {renderTodoItems()}
        </ol>
      </div>
    )
  }
});

module.exports = TodoList;
