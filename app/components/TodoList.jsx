var React = require('react');

var TodoList = React.createClass({
  render: function () {
    return (
      <div>
        TodoList.jsx
        <ol>
          <li>
            <input ref="todoItem" type="checkbox"  />
            <label htmlFor="">
              Todo item
            </label>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = TodoList;
