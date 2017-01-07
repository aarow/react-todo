var React = require('react');
var moment = require('moment');

var TodoItem = React.createClass({
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm:ss a');
    }
    return (
      <div className={todoClassName}>
        <label>
          <div>
            <input ref="todoItem" type="checkbox" checked={completed} onChange={ () => {
                this.props.onToggle(id);
              }} />
          </div>
          <div>
            <p>{text}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>

        </label>
      </div>
    )
  }
});

module.exports = TodoItem;
