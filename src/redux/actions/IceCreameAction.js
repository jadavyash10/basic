import { Num_Buy_Icecreame, Buy_Icecreame } from "../constanant/Index";

export const buyIceCreame = () => {
  return {
    type: Buy_Icecreame,
  };
};
export const numOfIcecreame = (number) => {
  return { type: Num_Buy_Icecreame, payload: number };
};
