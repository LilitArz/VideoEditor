const initialState = {
  link: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LINK":
      return {
        ...state,
        link: action.value
      }
    default:
      return state
  }
}
