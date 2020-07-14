import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";

class PicDisplay extends Component {
  constructor() {
    super();

    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);

    const img0 = require("./images/FlashMLSequence.png");
    const img1 = require("./images/FlashMLNetworkArch.png");

    this.state = {
      index: 0,
      imgList: [img0, img1],
    };
  }

  onClickForward() {
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  onClickBack() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  render() {
    const imageClick = () => {
      console.log("Click");
    };
    let closeImg = {
      cursor: "pointer",
      float: "right",
      marginTop: "5px",
      width: "20px",
    };

    return (
      <Dialog
        modal={false}
        open={true}
        title={
          <div>
            ABC
            <img src={this.state.imgList[0]} style={closeImg} />
          </div>
        }
      >
        Hello
      </Dialog>
      //   <div>
      //     <img src={this.state.imgList[this.state.index]} alt="" />
      //     <br />
      //     <button onClick={this.onClickBack}>Back</button>
      //     <button onClick={this.onClickForward}>Forward</button>
      //   </div>
    );
  }
}

export default PicDisplay;
