var React = require('react');

var TodoFilters = React.createClass({
  handleFilterTodos: function(e) {
    e.preventDefault();
  },

  handleSearchTodos: function(e) {
    console.log(this.refs.searchTodos.value)
    // search to do items
  },

  handleFilterCompleted: function(e) {
    console.log(this.refs.showCompletedTodos.checked)

    if(this.refs.showCompletedTodos.checked) {
      // show completed to dos
    } else {
      // hide completed to dos
    }
  },

  render: function () {
    return (
      <div>
        <form action="" onSubmit={this.handleFilterTodos}>
          <input onKeyUp={this.handleSearchTodos} ref="searchTodos" type="search" placeholder="Find todo items"/>
          <input onClick={this.handleFilterCompleted} ref="showCompletedTodos" id="showCompletedTodos" type="checkbox"/>
          <label htmlFor="showCompletedTodos">Show completed items</label>
      </form>
      </div>
    )
  }
});

module.exports = TodoFilters;
