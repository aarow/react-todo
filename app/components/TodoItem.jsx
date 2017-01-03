var React = require('react');

var TodoItem = React.createClass({
  render: function () {
    var {text, id} = this.props;
    return (
      <div>
        <input ref="todoItem" type="checkbox" id={id} />
        <label htmlFor={id}>
          {text} (id:{id})
        </label>
      </div>
    )
  }
});

module.exports = TodoItem;
