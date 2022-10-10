import { Buy_Cake, Num_BuY_Cake } from "../constanant/Index";

export const cakeBuyAsync = () => {
  return {
    type: Buy_Cake,
   
  };
};

export const cakeBuy = () => {
  return dispatch =>{
    setTimeout(() => dispatch(cakeBuyAsync()),2000);
  }
};

export const numOfCake = (state) => {
  return { type: Num_BuY_Cake, payload: state };
};
