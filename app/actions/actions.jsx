export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export var addToDo = (text) => {
  return {
    type: 'ADD_TO_DO',
    text
  }
}

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var toggleToDo = (id) => {
  return {
    type: 'TOGGLE_TO_DO',
    id
  }
}
