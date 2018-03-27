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
  isFinished = () => {
    const videoElement = document.getElementById("video")
    if (
      videoElement.currentTime >=
      this.props.slicedDurationArray[this.props.activePartitionIndex].endPoint
    ) {
      this.props.pauseVideo()
      clearInterval(this.props.checkForFinish)
      this.props.finished()
    }
  }
  playSlicedVideo() {
    if (this.props.activePartitionIndex != null) {
      const start = this.props.currentTime
      const videoElement = document.getElementById("video")
      videoElement.currentTime = start
      videoElement.play()
      this.props.checkForFinish = setInterval(this.isFinished, 1000)
    }
  }

  componentWillReceiveProps(nextProps) {
    const videoElement = document.getElementById("video")
    if (nextProps.isSlicedVideoPlayed) {
      this.playSlicedVideo()
    } else {
      nextProps.isPaused ? videoElement.pause() : videoElement.play()
    }
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
