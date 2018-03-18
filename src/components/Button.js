import React, { Component } from "react"

export class Button extends Component {
  loadFunction = e => {
    this.props.addLink(e.target.files[0].name)
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="file"
            name="video"
            accept="video/mp4,video/x-m4v,video/*"
            id="input"
            onChange={event => this.loadFunction(event)}
          />
        </form>
      </div>
    )
  }
}
