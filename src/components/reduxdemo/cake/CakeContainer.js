import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeBuy, numOfCake } from "../../../redux/actions/CakeAction";
import CakeClass from "../classcomponenent/CakeClass";
import Helmet from "react-helmet";


const CakeContainer = () => {
  const numofcakes = useSelector((state) => state.cake.numofcakes);
  const dispatch = useDispatch();
  return (
    <>
    <Helmet>
      <title>
        Redux/cake
      </title>
    </Helmet>
      <div>num of cakes : {numofcakes}</div>
      <button onClick={() => dispatch(cakeBuy())}>Buy cake</button>
      <div>num of cakes : {numofcakes}</div>
      <button onClick={() => dispatch(numOfCake(10))}>Buy cake</button>
      <h4>class components</h4>
      <CakeClass/>
    </>
  );
};

export default CakeContainer;
