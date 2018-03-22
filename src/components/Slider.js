import React, { Component } from "react"

export class Slider extends Component {
  constructor() {
    super()
    this.isDowned = false
  }
  callback = e => {
    if (this.isDowned) {
      document.getElementById("div").style.left = e.clientX + "px"
    }
  }
  componentDidMount() {
    document.body.addEventListener("mousemove", this.callback)
    document.body.addEventListener("mouseup", () => (this.isDowned = false))
  }
  render() {
    return (
      <div>
        <div
          id="div"
          ref={left => {
            this.left = left
          }}
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            left: "7px",
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
