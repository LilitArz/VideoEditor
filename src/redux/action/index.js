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

export const slicer = (sliceActionPartameters, slicedDurationArray) => {
  const activeVideoDuration =
    slicedDurationArray[sliceActionPartameters.key].endPoint -
    slicedDurationArray[sliceActionPartameters.key].startPoint
  return {
    type: "SLICE",
    value: activeVideoDuration
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

export const changeSliderAxis = axis => {
  let checkedAxis = axis
  return {
    type: "CHANGHE_AXIS",
    value: checkedAxis + "px"
  }
}

export const finished = () => {
  return {
    type: "FINISHED"
  }
}
