import React, { Component } from "react"

export class VideoSlicer extends Component {
  render() {
    return (
      <div
        style={{
          float: "left",
          width: "70%"
        }}
      >
        {this.props.slicedArray.map((item, key) => {
          return (
            <div
              style={{
                width: item.width,
                height: "30px",
                borderRadius: "25px",
                backgroundColor: "green",
                position: "relative",
                top: "100px",
                float: "left"
              }}
              onClick={event => {
                const percent = Math.round(
                  (event.clientX - event.target.offsetLeft) /
                    event.target.offsetWidth *
                    100
                )
                this.props.setParameters(percent, key)
              }}
            />
          )
        })}
        <img
          src="/photos/scissors.jpg"
          style={{
            width: "25px",
            height: "25px",
            position: "relative",
            top: "73px",
            left: "1010px",
            float: "left"
          }}
          onClick={event => {
            this.props.slicer()
          }}
        />
      </div>
    )
  }
}
