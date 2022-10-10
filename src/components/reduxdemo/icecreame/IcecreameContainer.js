import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  buyIceCreame,
  numOfIcecreame,
} from "../../../redux/actions/IceCreameAction";
import Helmet from "react-helmet";


const IcecreameContainer = () => {
  const [number, setNumber] = useState(1);
  const numoficecreame = useSelector((state) => state.icecreame.numoficecreame);
  const dispatch = useDispatch();
  return (
    <>
    <Helmet>
      <title>Redux/icecreame</title>
    </Helmet>
      <div>num of icecreame : {numoficecreame}</div>
      <button onClick={() => dispatch(buyIceCreame())}>Buy cake</button>
      <div>num of icecreame : {numoficecreame}</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(numOfIcecreame(number))}>Buy cake</button>
    </>
  );
};

export default IcecreameContainer;
