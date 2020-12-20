import React from "react"
import { Component } from "react"
import { render } from "react-dom"
import $ from "jquery"
import Layout from "../components/layout"
import IndexPage from "../pages/index"

class Test extends Component {
  componentDidMount() {
     $(document).load(function () {
   // $("a").on("click", function () {
      console.log("test")
   // })
     })
  }
  render() {
    return <IndexPage />
  }
}

render(<Test />, document.getElementById("root"))
export default Test