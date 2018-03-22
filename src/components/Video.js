import React, { Component } from "react"

export class Video extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      timer: 0
    }
  }
  clearPlayIcon = () => {
    this.setState({
      ...this.state,
      isVisible: false
    })
  }
  changeVisiblity = () => {
    if (this.props.link != "") {
      this.setState({
        ...this.state,
        isVisible: true,
        timer: setTimeout(this.clearPlayIcon, 500)
      })
    }
  }
  playSlicedVideo = key => {
    if (key != null) {
      const start = this.props.slicedDurationArray[key].startPoint
      const videoElement = document.getElementById("video")
      videoElement.currentTime = start
      videoElement.play()
    }
  }
  pauseSlicedVideo = key => {
    console.log("key", key)
    if (key != null) {
      console.log("key")
      const videoElement = document.getElementById("video")
      videoElement.pause()
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("nextProps.isPaused", nextProps.isPaused)
    const videoElement = document.getElementById("video")
    nextProps.isPaused ? videoElement.pause() : videoElement.play()
    nextProps.playPause.isPlayed
      ? this.playSlicedVideo(this.props.playPause.key)
      : this.pauseSlicedVideo(this.props.playPause.key)
  }

  setDuration = duration => {
    this.props.changeVideoDuration(duration)
  }
  render() {
    return (
      <div>
        <video
          id="video"
          style={{
            width: "73%",
            height: "20%"
          }}
          src={this.props.link}
          onClick={e => {
            this.changeVisiblity()
            this.props.isPaused
              ? this.props.playVideo()
              : this.props.pauseVideo()
          }}
          onLoadedMetadata={e => {
            this.setDuration(e.target.duration)
          }}
        />
        <img
          src={this.props.isPaused ? "/photos/play.png" : "/photos/pause.png"}
          style={{
            width: "50px",
            height: "50px",
            top: "250px",
            left: "500px",
            position: "absolute",
            visibility: this.state.isVisible ? "visible" : "hidden"
          }}
          onClick={e => {
            this.changeVisiblity()
            this.props.isPaused
              ? this.props.playVideo()
              : this.props.pauseVideo()
          }}
        />
      </div>
    )
  }
}
