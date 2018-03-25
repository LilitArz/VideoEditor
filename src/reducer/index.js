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
  checkForFinish: 0
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
      const splittedParts = state.slicedDurationArray.reduce((acc, item) => {
        const values = Object.values(item)
        return [...acc, ...values]
      }, [])

      const positionToSplit = state.sliceActionPartameters.percent
      const partsWithSplittingPosition = [
        ...splittedParts,
        positionToSplit,
        positionToSplit
      ]
      const sortedParts = partsWithSplittingPosition.sort((a, b) => a - b)

      const completeParts = sortedParts.reduce((acc, item, index, array) => {
        if (index % 2 == 0) {
          const splittedPart = {
            startPoint: item,
            endPoint: array[index + 1]
          }
          return [...acc, splittedPart]
        } else {
          return acc
        }
      }, [])
      return {
        ...state,
        slicedDurationArray: completeParts,
        sliderLeftValues: [
          { value: "0px" },
          ...state.sliderLeftValues.slice(0)
        ],
        currentTime: completeParts[state.activePartitionIndex].startPoint
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

    default:
      return state
  }
}
