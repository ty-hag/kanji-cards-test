const changeIndex = newIndex => {
  return {
    type: 'INDEX_CHANGE',
    payload: newIndex
  }
};

const updatePeek = newSettings => {
  return {
    type: 'CARD_DISPLAY_CHANGE',
    payload: newSettings
  }
};

const updateToggle = newSettings => {
  return {
    type: 'TOGGLE_CHANGE',
    payload: newSettings
  }
}

export { changeIndex, updatePeek, updateToggle };