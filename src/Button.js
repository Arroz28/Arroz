import React, { Component } from "react";

const style = {
  backgroundColor: "#68716c",
  color: "white",
  minWidth: "95px",
  minHeight: "35px",
  border: "0"
};

class Button extends Component {
  render() {
    return (
      <button style={style} onClick={() => this.props.onClick()}>
        {this.props.showOutside ? "Ver interior" : "Ver exterior"}
      </button>
    );
  }
}

export default Button;
