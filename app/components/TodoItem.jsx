var React = require('react');
var moment = require('moment');

var TodoItem = React.createClass({
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props;
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
      <div>
        <label>
          <input ref="todoItem" type="checkbox" checked={completed} onChange={ () => {
              this.props.onToggle(id);
            }} />
          <p>{text}</p>
          <p>{renderDate()}</p>
        </label>
      </div>
    )
  }
});

module.exports = TodoItem;
