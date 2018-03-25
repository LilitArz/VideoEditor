import React, { Component } from "react"

export class Slider extends Component {
  constructor() {
    super()
    this.isDowned = false
  }

  callback = e => {
    if (this.isDowned) {
      this.props.changeSliderAxis(e.clientX)
    }
  }
  mouseUp = event => {
    if (this.isDowned) {
      this.isDowned = false
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
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            left: this.props.sliderLeftValues[this.props.index].value,
            cursor: "pointer",
            borderRadius: "25px",
            backgroundColor: "yellow"
          }}
          onMouseDown={() => {
            this.isDowned = true
          }}
        />
      </div>
    )
  }
}
