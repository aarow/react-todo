var React = require('react');

var TodoItem = React.createClass({
  render: function () {
    var {text, id, completed} = this.props;
    return (
      <div>
        <label>
          <input ref="todoItem" type="checkbox" checked={completed} onChange={ () => {
              this.props.onToggle(id);
            }} />
          {text}
        </label>
      </div>
    )
  }
});

module.exports = TodoItem;
