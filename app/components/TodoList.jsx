var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({


  render: function () {
    var {todos} = this.props;
    var renderTodoItems = () => {
      return todos.map((todo) => {
        return (
          <li>
            <TodoItem key={todo.id} {...todo}></TodoItem>
          </li>
        )
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
