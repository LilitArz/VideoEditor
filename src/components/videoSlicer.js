import React, { Component } from "react"
import { Slider } from "./Slider"
import { Video } from "./Video"

export class VideoSlicer extends Component {
  render() {
    return (
      <div
        style={{
          width: "70%",
          float: "left"
        }}
      >
        {this.props.slicedArray.map((item, key) => {
          return (
            <div>
              <div
                style={{
                  width: item.width,
                  height: "30px",
                  borderRadius: "25px",
                  backgroundColor: "green",
                  float: "left",
                  position: "relative"
                }}
                onClick={event => {
                  const percent = Math.round(
                    (event.clientX - event.target.offsetLeft) /
                      event.target.offsetWidth *
                      100
                  )
                  this.props.setParameters(percent, key)

                  this.props.clicked(key) //showslicer
                }}
              >
                <Slider />
              </div>
              <ul
                style={{
                  listStyleType: "none",
                  visibility: this.props.slicedDurationArray[key].isHovered
                    ? "visible"
                    : "hidden",
                  width: "200px",
                  borderRadius: "25px",
                  position: "relative",
                  top: "140px",
                  left: "100px",
                  height: "30px",
                  backgroundColor: " #C0C0C0",
                  float: "left"
                }}
              >
                <li>
                  <img
                    src="/photos/playButton.png"
                    style={{
                      height: "20px",
                      width: "20px",
                      position: "relative",
                      padding: "5px 5px"
                    }}
                    onClick={() => this.props.playSlicedVideo(key)}
                  />
                </li>
                <li>
                  <img
                    src="/photos/Next.png"
                    style={{
                      height: "20px",
                      width: "20px",
                      position: "relative",
                      bottom: "30px",
                      left: "100px"
                    }}
                  />
                </li>
                <li>
                  <img
                    src="/photos/Previous.png"
                    style={{
                      height: "20px",
                      width: "20px",
                      position: "relative",
                      bottom: "53px",
                      left: "60px"
                    }}
                  />
                </li>
                <li>
                  <img
                    src="/photos/cross.png"
                    style={{
                      height: "20px",
                      width: "20px",
                      position: "relative",
                      bottom: "77px",
                      left: "140px"
                    }}
                  />
                </li>
              </ul>
            </div>
          )
        })}
        <img
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
            this.props.slicer()
          }}
        />
      </div>
    )
  }
}
