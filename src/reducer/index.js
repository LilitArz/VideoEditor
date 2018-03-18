const initialState = {
  link: "",
  isPaused: true
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LINK":
      return {
        ...state,
        link: action.value
      }
    case "PLAY":
      return {
        ...state,
        isPaused: action.value
      }
    case "PAUSE":
      return {
        ...state,
        isPaused: action.value
      }
    case "CHANGE_DURATION":
      return {
        ...state,
        videoDuration: action.value
      }
    default:
      return state
  }
}
