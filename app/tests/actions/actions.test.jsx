var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add to do action', ( )=> {
    var action = {
      type: 'ADD_TO_DO',
      text: 'Some text'
    };

    var res = actions.addToDo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    var res = actions.toggleShowCompleted(actions.toggleShowCompleted);

    expect(res).toEqual(action);
  });

  it('should generate toggle to do', () => {
    var action = {
      type: 'TOGGLE_TO_DO',
      id: '11'
    };

    var res = actions.toggleToDo(action.id);

    expect(res).toEqual(action);
  });

});
