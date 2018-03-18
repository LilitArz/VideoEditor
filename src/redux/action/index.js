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
