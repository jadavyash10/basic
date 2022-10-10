import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import { cakeBuy, numOfCake } from "../../../redux/actions/CakeAction";
import { buyIceCreame,numOfIcecreame } from "../../../redux/actions/IceCreameAction";

export class CakeClass extends Component {
  render() {
    return (
      <div>
        <p>Num of cakes : {this.props.numofcake}</p>
        <button onClick={this.props.cakeBuy}>Buy cake</button>
        <button onClick={this.props.numOfCake}>Buy cake</button>
        <p>Num of Icecreams : {this.props.numoficecreame}</p>
        <button onClick={this.props.buyIceCreame}>Buy Icecreame</button>
        <button onClick={this.props.numOfIcecreame}>Buy Icecreame</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numofcake: state.cake.numofcakes,
    numoficecreame: state.icecreame.numoficecreame,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cakeBuy: () => dispatch(cakeBuy()),
    numOfCake: () => dispatch(numOfCake(10)),
    buyIceCreame: () => dispatch(buyIceCreame()),
    numOfIcecreame: () => dispatch(numOfIcecreame(10)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeClass);
