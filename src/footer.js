import React, { Component } from "react";
import logo from "./logo.svg";
import ReaactDOM from "react-dom";
import ReactFitText from "react-fittext";
import MdPhone from "react-icons/lib/md/phone";
import MdEmail from "react-icons/lib/md/mail";

const style = {
  backgroundColor: "#F8F8F8",
  position: "fixed",
  right: "20",
  bottom: "20",
  minWidth: "10%",
  opacity: 0.7,
  alignItems: "center",
  justifyContent: "center",
  minHeight: "5%"
};

class Footer extends Component {
  render() {
    return (
      <div style={style}>
        <p>
          <MdPhone /> Mail: aguerrarocha@gmail.com
        </p>
        <p>
          <MdEmail /> Número de tel: 962406719
        </p>
      </div>
    );
  }
}

export default Footer;
