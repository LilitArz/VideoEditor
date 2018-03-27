const initialState = {
  link: "",
  isPaused: true,
  videoDuration: 0,
  projectVolume: 0,
  currentTime: 0,
  sliderLeftValues: [{ value: "0px" }],
  slicedDurationArray: [
    {
      startPoint: 0,
      endPoint: 0
    }
  ],
  activePartitionIndex: 0,
  sliceActionPartameters: {},
  isSlicedVideoPlayed: false,
  checkForFinish: 0,
  activePartitionOffsets: { left: 0, width: 967 }
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
        isPaused: false
      }
    case "PAUSE":
      return {
        ...state,
        isPaused: true,
        isSlicedVideoPlayed: false
      }
    case "SET_DURATION":
      return {
        ...state,
        videoDuration: action.value,
        slicedDurationArray: [
          {
            startPoint: 0,
            endPoint: action.value
          }
        ]
      }
    case "CHANGE_VOLUME":
      return {
        ...state,
        projectVolume: action.value
      }

    case "DIVIDE":
      return {
        ...state,
        sliceActionPartameters: {
          percent: action.value.percent,
          key: action.value.key
        },
        activePartitionIndex: action.value.key,
        currentTime: state.slicedDurationArray[action.value.key].startPoint
      }
    case "SLICE":
      return {
        ...state,
        slicedDurationArray: action.value,
        sliderLeftValues: [
          { value: "0px" },
          ...state.sliderLeftValues.slice(0)
        ],
        currentTime: action.value[state.activePartitionIndex].startPoint
      }

    case "PLAY_SLICED_VIDEO":
      return {
        ...state,
        isSlicedVideoPlayed: true,
        isPaused: false
      }
    case "PAUSE_SLICED_VIDEO":
      return {
        ...state,
        isSlicedVideoPlayed: false,
        isPaused: true
      }
    case "CHANGHE_AXIS":
      return {
        ...state,
        sliderLeftValues: [
          ...state.sliderLeftValues.slice(0, state.activePartitionIndex),
          {
            value: action.value
          },
          ...state.sliderLeftValues.slice(state.activePartitionIndex + 1)
        ]
      }
    case "FINISHED":
      return {
        ...state,
        checkForFinish: 0
      }
    case "DELETE":
      return {
        ...state,
        slicedDurationArray: [
          ...state.slicedDurationArray.slice(0, state.activePartitionIndex),
          ...state.slicedDurationArray.slice(state.activePartitionIndex + 1)
        ],
        activePartitionIndex: state.activePartitionIndex - 1,
        currentTime: 0
      }
    case "ADD_CURRENT_TIME":
      return {
        ...state,
        currentTime: state.currentTime + 1
      }
    case "REDUCE_CURRENT_TIME":
      return {
        ...state,
        currentTime: state.currentTime - 1
      }
    case "SET_OFFSETS":
      return {
        ...state,
        activePartitionOffsets: action.value
      }
    case "SET_CURRENT_TIME":
      return {
        ...state,
        currentTime: action.value * -1
      }
    default:
      return state
  }
}
