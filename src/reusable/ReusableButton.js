import React from 'react';

const ReusableButton = (props) => {
 return (
  <button onClick={props.onClick}> {props.children} </button> 
)}
export default ReusableButton;