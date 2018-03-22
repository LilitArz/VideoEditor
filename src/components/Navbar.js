import React, { Component } from "react"

export class Navbar extends Component {
  render() {
    return (
      <ul
        style={{
          listStyleType: "none",
          width: "70%",
          height: "7%",
          backgroundColor: "rgb(199, 186, 186)",
          float: "left",
          visibility: this.props.videoLink == "" ? "hidden" : "visible"
        }}
      >
        <li
          style={{
            float: "left"
          }}
        >
          <img
            src="/photos/playButton.png"
            style={{
              width: "40px",
              height: "40px",
              display: "block",
              position: "relative",
              left: "80px"
            }}
            onClick={e => {
              this.props.isPaused
                ? this.props.playVideo()
                : this.props.pauseVideo()
            }}
          />
        </li>
        <li
          style={{
            float: "left"
          }}
        >
          <span
            style={{
              padding: "50px 15px 80px 15px",
              position: "relative",
              top: "20px",
              left: "150px"
            }}
          >
            Full Duration
          </span>
          <span
            style={{
              padding: "20px 15px 80px 15px",
              fontSize: "25px",
              display: "block",
              textAlign: "center",
              position: "relative",
              left: "150px"
            }}
          >
            {this.props.videoDuration}
          </span>
        </li>
        <li
          style={{
            float: "left"
          }}
        >
          <img
            src="/photos/myundo.png"
            style={{
              width: "40px",
              height: "40px",
              display: "block",
              position: "relative",
              left: "250px"
            }}
          />
        </li>
        <li
          style={{
            float: "left"
          }}
        >
          <img
            src="/photos/myredo.png"
            style={{
              width: "40px",
              height: "40px",
              display: "block",
              position: "relative",
              left: "330px"
            }}
          />
        </li>
        <li
          style={{
            float: "right"
          }}
        >
          <span
            style={{
              padding: "50px 15px 80px ",
              position: "relative",
              top: "15px",
              right: "150px"
            }}
          >
            Project Volume
          </span>
          <span
            style={{
              padding: "50px 15px 80px 15px",
              position: "relative",
              top: "40px",
              right: "230px",
              fontSize: "25px"
            }}
          >
            {this.props.projectVolume}
          </span>
          <input
            type="range"
            value={this.props.projectVolume}
            onChange={e => {
              this.props.changeVolume(e.target.value)
            }}
            style={{
              padding: "20px 40px",
              position: "relative",
              width: "30px",
              bottom: "15px",
              display: "block"
            }}
          />
        </li>
      </ul>
    )
  }
}
