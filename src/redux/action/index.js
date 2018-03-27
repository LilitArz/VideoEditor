export const addLink = link => {
  return {
    type: "ADD_LINK",
    value: link
  }
}

export const playVideo = () => {
  return {
    type: "PLAY",
    value: false
  }
}

export const pauseVideo = () => {
  return {
    type: "PAUSE",
    value: true
  }
}

export const changeDuration = duration => {
  return {
    type: "SET_DURATION",
    value: Math.round(duration * 10) / 10
  }
}

export const changeVolume = volume => {
  return {
    type: "CHANGE_VOLUME",
    value: volume
  }
}

export const setParameters = (percent, key) => {
  return {
    type: "DIVIDE",
    value: {
      percent: percent,
      key: key
    }
  }
}

/**
 *
 * @param {*} sliceActionPartameters
 * @param {*} slicedDurationArray
 * @description
 */
export const slicer = (sliceActionPartameters, slicedDurationArray) => {
  const splittedParts = slicedDurationArray.reduce((acc, item) => {
    const values = Object.values(item)
    return [...acc, ...values]
  }, [])

  const positionToSplit = sliceActionPartameters.percent
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
    type: "SLICE",
    value: completeParts
  }
}

export const playSlicedVideo = () => {
  return {
    type: "PLAY_SLICED_VIDEO"
  }
}

export const pauseSlicedVideo = () => {
  return {
    type: "PAUSE_SLICED_VIDEO"
  }
}

export const changeSliderAxis = (axis, activePartitionOffsets) => {
  return {
    type: "CHANGHE_AXIS",
    value: `${Math.min(axis, activePartitionOffsets.width)}px`
  }
}

export const finished = () => {
  return {
    type: "FINISHED"
  }
}

export const deleteSelectedPart = () => {
  return {
    type: "DELETE"
  }
}

export const addCurrentTime = () => {
  return {
    type: "ADD_CURRENT_TIME"
  }
}

export const reduceCurrentTime = () => {
  return {
    type: "REDUCE_CURRENT_TIME"
  }
}

export const setOffsetProperties = (left, width) => {
  return {
    type: "SET_OFFSETS",
    value: {
      left: left,
      width: width
    }
  }
}

export const setCurrentTime = position => {
  return {
    type: "SET_CURRENT_TIME",
    value: position
  }
}
