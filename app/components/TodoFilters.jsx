var React = require('react');

var TodoFilters = React.createClass({
  handleSearchTodos: function() {
    var showCompleted = this.refs.showCompletedTodos.checked;
    var searchText = this.refs.searchTodos.value;

    this.props.onSearchTodos(showCompleted, searchText);
  },

  render: function () {
    return (
      <div className="container__header">
        <div>
          <input onChange={this.handleSearchTodos} ref="searchTodos" type="search" placeholder="Find todo items"/>
        </div>
        <div>
          <label>
            <input onChange={this.handleSearchTodos} ref="showCompletedTodos" type="checkbox"/>
            Show completed items
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoFilters;
