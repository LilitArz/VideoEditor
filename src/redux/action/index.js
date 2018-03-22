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
    type: "CHANGE_DURATION",
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

export const slicer = () => {
  return {
    type: "SLICE"
  }
}

export const clicked = key => {
  return {
    type: "CLICK",
    value: key
  }
}

export const playSlicedVideo = key => {
  return {
    type: "PLAY_SLICED_VIDEO",
    value: key
  }
}
