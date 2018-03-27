import React, { Component } from "react"
const styles = {
  position: "absolute",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  borderRadius: "25px",
  backgroundColor: "yellow"
}
export class Slider extends Component {
  constructor() {
    super()
    this.isDowned = false
  }

  callback = e => {
    if (this.isDowned) {
      this.props.changeSliderAxis(e.clientX, this.props.activePartitionOffsets)
    }
  }
  calculateSliderPosition = e => {
    const duration =
      this.props.slicedDurationArray[this.props.activePartitionIndex]
        .startPoint -
      this.props.slicedDurationArray[this.props.activePartitionIndex].endPoint
    const position = Math.round(
      (e.clientX - this.props.activePartitionOffsets.left) /
        this.props.activePartitionOffsets.width *
        100
    )
    return position * duration / 100
  }
  mouseUp = event => {
    if (this.isDowned) {
      this.isDowned = false
      const position = this.calculateSliderPosition(event)
      this.props.setCurrentTime(position)
    }
  }
  componentDidMount() {
    document.body.addEventListener("mousemove", this.callback)
    document.body.addEventListener("mouseup", this.mouseUp)
  }
  componentWillUnMount() {
    document.body.removeEventListener("mousemove", this.callback)
    document.body.removeEventListener("mouseup", this.mouseUp)
  }
  render() {
    return (
      <div>
        <div
          ref={ref => (this.left = ref)}
          style={{
            ...styles,
            left: this.props.sliderLeftValues[this.props.index].value
          }}
          onMouseDown={() => {
            this.isDowned = true
          }}
        />
      </div>
    )
  }
}
