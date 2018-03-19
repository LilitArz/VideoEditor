const initialState = {
  slicedArray: [{ width: "100%" }],
  sliceActionPartameters: []
}

export const sliceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DIVIDE":
      return {
        ...state,
        sliceActionPartameters: {
          percent: action.value.percent,
          key: action.value.key
        }
      }
    case "SLICE":
      if (state.sliceActionPartameters.length !== 0) {
        const initialPercent = Number(
          state.slicedArray[state.sliceActionPartameters.key].width.slice(0, -1)
        )
        const calculatedpercent = Math.round(
          state.sliceActionPartameters.percent * initialPercent / 100
        )
        return {
          ...state,
          slicedArray: [
            ...state.slicedArray.slice(0, state.sliceActionPartameters.key),
            { width: calculatedpercent + "%" },
            { width: initialPercent - calculatedpercent + "%" },
            ...state.slicedArray.slice(state.sliceActionPartameters.key + 1)
          ],
          sliceActionPartameters: []
        }
      } else {
        return state
      }
    default:
      return state
  }
}
