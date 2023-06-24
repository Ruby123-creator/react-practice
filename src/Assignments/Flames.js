import React, { useState } from "react";

const Flames = () => {
  const [firstname, setfirstname] = useState("");
  const [secondname, setsecondname] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    for (let x of firstname) {
      if (secondname.includes(x)) {
        flag = true;
      }
    }
    let length = firstname.length + secondname.length;
    if (flag === true) {
      length = length - 2;
    }
    switch (length % 6) {
      case 0:
        setResult("Siblings");
        break;
      case 1:
        setResult("Friends");
        break;

      case 2:
        setResult("Love");
        break;

      case 3:
        setResult("Affection");
        break;

      case 4:
        setResult("Marriage");
        break;

      case 5:
        setResult("Enemy");
        break;

      default:
        setResult("Please3 enter a valid input");
    }
  };
  function ClearAll() {
    setResult("");
    setfirstname("");
    setsecondname("");
  }
  return (
    <div>
      Flame RelationShip
      <form action="">
        <input
          type="text"
          placeholder="Enter first name"
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter second name"
          onChange={(e) => setsecondname(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Calculate relationship</button>
        <button onClick={ClearAll}>Clear</button>
      </form>
      <div>The realtion between both of them is {result}</div>
    </div>
  );
};

export default Flames;
