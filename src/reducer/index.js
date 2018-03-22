const initialState = {
  link: "",
  isPaused: true,
  videoDuration: 0,
  projectVolume: 0,
  slicedDurationArray: [
    {
      startPoint: 0,
      endPoint: 0,
      key: 0,
      isHovered: true
    }
  ],
  visibleSlicerIndex: 0,
  slicedArray: [{ width: "100%" }],
  sliceActionPartameters: [],
  playPause: {
    isPlayed: false,
    key: null
  }
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
        isPaused: action.value,
        playPause: {
          isPlayed: false,
          key: state.playPause.key
        }
      }
    case "CHANGE_DURATION":
      return {
        ...state,
        videoDuration: action.value,
        slicedDurationArray: [
          {
            startPoint: 0,
            endPoint: action.value,
            key: 0,
            isHovered: true
          }
        ]
      }
    case "CHANGE_VOLUME":
      return {
        ...state,
        projectVolume: action.value
      }

    case "CLICK":
      state.slicedDurationArray[state.visibleSlicerIndex].isHovered = false
      return {
        ...state,
        slicedDurationArray: [
          ...state.slicedDurationArray.slice(0, action.value),
          {
            startPoint: state.slicedDurationArray[action.value].startPoint,
            endPoint: state.slicedDurationArray[action.value].endPoint,
            key: action.value,
            isHovered: true
          },
          ...state.slicedDurationArray.slice(action.value + 1)
        ]
      }
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
        const currentpartduration =
          state.slicedDurationArray[state.sliceActionPartameters.key].endPoint -
          state.slicedDurationArray[state.sliceActionPartameters.key].startPoint
        const secondPartStartPoint =
          currentpartduration * state.sliceActionPartameters.percent / 100
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
          slicedDurationArray: [
            ...state.slicedDurationArray.slice(
              0,
              state.sliceActionPartameters.key
            ),
            {
              startPoint:
                state.slicedDurationArray[state.sliceActionPartameters.key]
                  .startPoint,
              endPoint: secondPartStartPoint,
              key: state.sliceActionPartameters.key,
              isHovered: true
            },
            {
              startPoint: secondPartStartPoint,
              endPoint:
                state.slicedDurationArray[state.sliceActionPartameters.key]
                  .endPoint,
              key: state.sliceActionPartameters.key + 1,
              isHovered: false
            },
            ...state.slicedDurationArray.slice(
              state.sliceActionPartameters.key + 1
            )
          ],
          sliceActionPartameters: []
        }
      } else {
        return state
      }
    case "PLAY_SLICED_VIDEO":
      return {
        ...state,
        playPause: {
          isPlayed: true,
          key: action.key
        },
        isPaused: false
      }

    default:
      return state
  }
}
