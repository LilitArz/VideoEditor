import React, { Component } from "react"
const styles = {
  ul: {
    listStyleType: "none",
    width: "70%",
    height: "7%",
    backgroundColor: "rgb(199, 186, 186)",
    float: "left"
  },
  li: {
    float: "left"
  },
  playButton: {
    width: "40px",
    height: "40px",
    display: "block",
    position: "relative",
    left: "80px"
  },
  fullDuration: {
    padding: "50px 15px 80px 15px",
    position: "relative",
    top: "20px",
    left: "150px"
  },
  duration: {
    padding: "20px 15px 80px 15px",
    fontSize: "25px",
    display: "block",
    textAlign: "center",
    position: "relative",
    left: "150px"
  },
  projectVolume: {
    padding: "50px 15px 80px ",
    position: "relative",
    top: "15px",
    right: "150px"
  },
  volumeValue: {
    padding: "50px 15px 80px 15px",
    position: "relative",
    top: "40px",
    right: "230px",
    fontSize: "25px"
  },
  undo: {
    width: "40px",
    height: "40px",
    display: "block",
    position: "relative",
    left: "250px"
  },
  redo: {
    width: "40px",
    height: "40px",
    display: "block",
    position: "relative",
    left: "330px"
  },
  range: {
    padding: "20px 40px",
    position: "relative",
    width: "30px",
    bottom: "15px",
    display: "block"
  },
  righFloat: {
    float: "right"
  }
}
export class Navbar extends Component {
  render() {
    return (
      <ul
        style={{
          ...styles.ul,
          visibility: this.props.videoLink == "" ? "hidden" : "visible"
        }}
      >
        <li style={styles.li}>
          <img
            src="/photos/playButton.png"
            style={styles.playButton}
            onClick={e => {
              this.props.isPaused
                ? this.props.playVideo()
                : this.props.pauseVideo()
            }}
          />
        </li>
        <li style={styles.li}>
          <span style={styles.fullDuration}>Full Duration</span>
          <span style={styles.duration}>{this.props.videoDuration}</span>
        </li>
        <li style={styles.li}>
          <img src="/photos/myundo.png" style={styles.undo} />
        </li>
        <li style={styles.li}>
          <img src="/photos/myredo.png" style={styles.redo} />
        </li>
        <li style={styles.righFloat}>
          <span style={styles.projectVolume}>Project Volume</span>
          <span style={styles.volumeValue}>{this.props.projectVolume}</span>
          <input
            type="range"
            value={this.props.projectVolume}
            onChange={e => {
              this.props.changeVolume(e.target.value)
            }}
            style={styles.range}
          />
        </li>
      </ul>
    )
  }
}
