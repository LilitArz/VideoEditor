import React, { Component } from "react"
const pugFile = require("../../pug/index.pug")

export class Test extends Component {
  constructor() {
    super()
    this.myDiv = 0
    this.input = 0
    this.image = 0
    this.container = 0
  }
  delay = e => {
    e.stopPropagation()
  }
  func = e => {
    e.stopPropagation()
    this.myDiv = document.getElementById(e.target.id)

    switch (e.target.nodeName) {
      case "IMG":
        this.input = document.createElement("input")
        this.container.appendChild(this.input)
        this.input.autofocus = true
        this.input.value = e.target.src
        break
      case "P":
      case "DIV":
        const text = this.myDiv.innerHTML
        this.myDiv.innerHTML = "<input id ='input' autofocus />"
        this.input = document.getElementById("input")
        this.input.value = text
      default:
        break
    }
    this.input.addEventListener("click", this.delay)
    this.myDiv.removeEventListener("click", this.func)
  }

  changeDivValue = () => {
    if (this.input !== 0) {
      switch (this.myDiv.nodeName) {
        case "IMG":
          this.myDiv.src = this.input.value
          this.input.parentElement.removeChild(this.input)
          break
        case "P":
        case "DIV":
          this.myDiv.innerHTML = this.input.value
          break
        default:
          break
      }
      this.myDiv.addEventListener("click", this.func)
      this.input = 0
    }
  }

  componentDidMount() {
    this.container = document.getElementsByClassName("container")[0]
    for (let i = 0; i < this.container.childNodes.length; ++i) {
      this.container.childNodes[i].addEventListener("click", this.func)
    }
    document.body.addEventListener("click", this.changeDivValue)
  }

  render() {
    function createMarkup() {
      return { __html: pugFile }
    }
    return <div dangerouslySetInnerHTML={createMarkup()} />
  }
}
