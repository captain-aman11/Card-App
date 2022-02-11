import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    sessionStorage.clear();
    window.location = "/";
  }
  render() {
    return null;
  }
}
export default Logout;
