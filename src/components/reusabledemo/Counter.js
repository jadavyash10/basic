import { useState } from "react";
import Card from "../../reusable/Card";
import ReusableButton from "../../reusable/ReusableButton";
import CardListItem, { characters } from "../../reusable/CardListItem";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleAdd = () => {
    setNumber((pre) => pre + 1);
  };
  const handleRemove = () => {
    setNumber((pre) => pre - 1);
  };
  const handleMulti = () => {
    setNumber(number * 2);
  };
  return (
    <div>
      {number}
      <div>
        <ReusableButton onClick={handleAdd}>Add</ReusableButton>
        <ReusableButton onClick={handleRemove}>Subtract</ReusableButton>
        <ReusableButton onClick={handleMulti}>multi</ReusableButton>
      </div>
      <div>
        <div className="row ">
          <div className="col-md-3">
            <Card color="primary" Header="React js" />
          </div>
          <div className="col-md-3">
            <Card color="secondary" Header="Node js" />
          </div>
          <div className="col-md-3">
            <Card color="success" Header="Angular js" />
          </div>
        </div>
      </div>
      <div>
        {characters.map((character) => {
          return <CardListItem character={character} key={character.id} />;
        })}
      </div>
    </div>
  );
};

export default Counter;
