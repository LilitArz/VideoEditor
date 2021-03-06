import React, { Component } from "react"
import { store } from "../redux/store"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ReactDOMServer from "react-dom/server"
import { Test } from "./Test"
import {
  playVideo,
  addLink,
  pauseVideo,
  changeDuration,
  changeVolume,
  setParameters,
  slicer,
  mouseLeave,
  playSlicedVideo,
  changeSliderAxis,
  pauseSlicedVideo,
  finished,
  changeCurrentTime,
  deleteSelectedPart,
  addCurrentTime,
  reduceCurrentTime,
  setOffsetProperties,
  setCurrentTime
} from "../redux/action"
import { Button } from "./Button"
import { Video } from "./Video"
import { Navbar } from "./Navbar"
import { VideoSlicer } from "./videoSlicer"

const actionCreators = dispatch =>
  bindActionCreators(
    {
      playVideo,
      addLink,
      pauseVideo,
      changeDuration,
      changeVolume,
      setParameters,
      slicer,
      mouseLeave,
      playSlicedVideo,
      changeSliderAxis,
      pauseSlicedVideo,
      finished,
      changeCurrentTime,
      deleteSelectedPart,
      addCurrentTime,
      reduceCurrentTime,
      setOffsetProperties,
      setCurrentTime
    },
    dispatch
  )

const mapStateToProps = store => {
  return {
    videoDuration: store.videoDuration,
    link: store.link,
    isPaused: store.isPaused,
    projectVolume: store.projectVolume,
    slicedArray: store.slicedArray,
    sliceActionPartameters: store.sliceActionPartameters,
    slicedDurationArray: store.slicedDurationArray,
    isSlicedVideoPlayed: store.isSlicedVideoPlayed,
    currentTime: store.currentTime,
    activePartitionIndex: store.activePartitionIndex,
    sliderLeftValues: store.sliderLeftValues,
    checkForFinish: store.checkForFinish,
    activePartitionOffsets: store.activePartitionOffsets
  }
}
class VideoHolder extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "1000px",
          float: "left"
        }}
      >
        <Test />
        <Video
          link={this.props.link}
          finished={this.props.finished}
          isPaused={this.props.isPaused}
          playVideo={this.props.playVideo}
          pauseVideo={this.props.pauseVideo}
          currentTime={this.props.currentTime}
          checkForFinish={this.props.checkForFinish}
          slicedDurationArray={this.props.slicedDurationArray}
          changeVideoDuration={this.props.changeDuration}
          isSlicedVideoPlayed={this.props.isSlicedVideoPlayed}
          activePartitionIndex={this.props.activePartitionIndex}
        />
        <Navbar
          videoLink={this.props.link}
          changeVolume={this.props.changeVolume}
          projectVolume={this.props.projectVolume}
          videoDuration={this.props.videoDuration}
          isPaused={this.props.isPaused}
          playVideo={this.props.playVideo}
          pauseVideo={this.props.pauseVideo}
        />
        <VideoSlicer
          isSlicedVideoPlayed={this.props.isSlicedVideoPlayed}
          pauseSlicedVideo={this.props.pauseSlicedVideo}
          setParameters={this.props.setParameters}
          slicer={this.props.slicer}
          sliceActionPartameters={this.props.sliceActionPartameters}
          slicedDurationArray={this.props.slicedDurationArray}
          playSlicedVideo={this.props.playSlicedVideo}
          videoDuration={this.props.videoDuration}
          changeSliderAxis={this.props.changeSliderAxis}
          sliderLeftValues={this.props.sliderLeftValues}
          deleteSelectedPart={this.props.deleteSelectedPart}
          addCurrentTime={this.props.addCurrentTime}
          reduceCurrentTime={this.props.reduceCurrentTime}
          activePartitionIndex={this.props.activePartitionIndex}
          setOffsetProperties={this.props.setOffsetProperties}
          activePartitionOffsets={this.props.activePartitionOffsets}
          setCurrentTime={this.props.setCurrentTime}
        />

        <Button addLink={this.props.addLink} />
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(VideoHolder)
