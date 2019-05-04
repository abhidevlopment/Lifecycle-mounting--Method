import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abhi"
    };
    console.log("Lifecycle A Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycle A componentDidmount");
  }
  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <div> Lifecyle A</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
