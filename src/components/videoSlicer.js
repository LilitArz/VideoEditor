import React, { Component } from "react"
import { Slider } from "./Slider"
import { Video } from "./Video"

const styles = {
  ul: {
    listStyleType: "none",
    width: "200px",
    borderRadius: "25px",
    position: "relative",
    top: "140px",
    left: "100px",
    height: "30px",
    backgroundColor: " #C0C0C0",
    float: "left"
  }
}

export class VideoSlicer extends Component {
  calculatePercent = (start, end, duration) => {
    if (duration != 0) {
      const diff = end - start
      const percent = diff * 100 / duration
      return percent + "%"
    } else {
      return 0 + "%"
    }
  }

  calculatePosition = e => {
    const duration = this.props.videoDuration
    const position = Math.round(
      (e.clientX - e.target.parentElement.offsetLeft) /
        e.target.parentElement.offsetWidth *
        100
    )
    return position * duration / 100
  }

  getSlicedParts = (item, key) => (
    <div>
      <div
        class="dividedVideo"
        style={{
          width: this.calculatePercent(
            item.startPoint,
            item.endPoint,
            this.props.videoDuration
          ),
          height: "30px",
          borderRadius: "25px",
          backgroundColor: "green",
          float: "left",
          position: "relative"
        }}
        onClick={event => {
          const position = this.calculatePosition(event)
          this.props.setParameters(position, key)
          this.props.setOffsetProperties(event)
        }}
      >
        <Slider
          slicedDurationArray={this.props.slicedDurationArray}
          activePartitionIndex={this.props.activePartitionIndex}
          changeSliderAxis={this.props.changeSliderAxis}
          sliderLeftValues={this.props.sliderLeftValues}
          index={key}
          activePartitionOffsets={this.props.activePartitionOffsets}
          setCurrentTime={this.props.setCurrentTime}
        />
      </div>
    </div>
  )

  render() {
    const {
      videoDuration,
      slicedDurationArray,
      isSlicedVideoPlayed
    } = this.props
    return (
      <div
        style={{
          visibility: videoDuration == 0 ? "hidden" : "visible",
          width: "70%",
          float: "left"
        }}
      >
        {slicedDurationArray.map(this.getSlicedParts)}
        <ul style={styles.ul}>
          <li>
            <img
              src={
                isSlicedVideoPlayed
                  ? "/photos/pause.png"
                  : "/photos/playButton.png"
              }
              style={{
                padding: "5px 5px",
                height: "20px",
                width: "20px",
                position: "relative"
              }}
              onClick={() => {
                this.props.isSlicedVideoPlayed
                  ? this.props.pauseSlicedVideo()
                  : this.props.playSlicedVideo()
              }}
            />
          </li>
          <li>
            <img
              src="/photos/Next.png"
              style={{
                bottom: "30px",
                left: "100px",
                height: "20px",
                width: "20px",
                position: "relative"
              }}
              onClick={() => this.props.addCurrentTime()}
            />
          </li>
          <li>
            <img
              src="/photos/Previous.png"
              style={{
                bottom: "53px",
                left: "60px",
                height: "20px",
                width: "20px",
                position: "relative"
              }}
              onClick={() => this.props.reduceCurrentTime()}
            />
          </li>
          <li>
            <img
              src="/photos/cross.png"
              style={{
                bottom: "77px",
                left: "140px",
                height: "20px",
                width: "20px",
                position: "relative"
              }}
              onClick={() => this.props.deleteSelectedPart()}
            />
          </li>
        </ul>

        <img
          class="divide"
          src="/photos/scissors.jpg"
          style={{
            width: "25px",
            height: "25px",
            position: "relative",
            bottom: "27px",
            left: "770px",
            float: "left"
          }}
          onClick={() => {
            if (Object.keys(this.props.sliceActionPartameters).length !== 0) {
              this.props.slicer(
                this.props.sliceActionPartameters,
                this.props.slicedDurationArray
              )
            }
          }}
        />
      </div>
    )
  }
}
