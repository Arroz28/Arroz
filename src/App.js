import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "nuka-carousel";
import ReaactDOM from "react-dom";
import Footer from "./footer";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showOutside: true };
  }
  souGay = () => {
    this.setState({
      showOutside: !this.state.showOutside
    });
  };
  getCarousel() {
    if (this.state.showOutside) {
      return (
        <div style={{ flex: 1 }}>
          <Carousel wrapAround={true}>
            <img src={require("./images/Imagem1.jpg")} />
            <img src={require("./images/Imagem2.jpg")} />
            <img src={require("./images/Imagem3.jpg")} />
            <img src={require("./images/Imagem4.jpg")} />
            <img src={require("./images/Imagem5.jpg")} />
          </Carousel>
        </div>
      );
    } else {
      return (
        <div>
          <Carousel wrapAround={true}>
            <img src={require("./images/dentro1.jpg")} />
            <img src={require("./images/dentro2.jpg")} />
            <img src={require("./images/dentro3.jpg")} />
            <img src={require("./images/dentro4.jpg")} />
            <img src={require("./images/dentro5.jpg")} />
            <img src={require("./images/dentro6.jpg")} />
            <img src={require("./images/dentro7.jpg")} />
          </Carousel>
        </div>
      );
    }
  }
  render() {
    return (
      <div style={{ flex: 1, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 30,
            zIndex: 1,
            right: 20
          }}
        >
          <Button
            showOutside={this.state.showOutside}
            onClick={() => this.souGay()}
          />
        </div>
        {this.getCarousel()}
        <Footer />
      </div>
    );
  }
}

export default App;

ReaactDOM.render(<App />, document.getElementById("root"));
