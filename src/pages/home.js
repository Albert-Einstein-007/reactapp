import { useState } from "react";

function Pfruites(propss) {
  var data = propss.fru;
  var Ogbdy = " : it is good for our health and it contain so much neutrents";
  return (
    <>
      {data.map((item, index) => (
        <p key={index}>
          <h2 onClick={(event) => alertS(item, event, index)}>{item}</h2>
          {Ogbdy}
        </p>
      ))}
    </>
  );
}

function alertS(item, event, index) {
  console.log(item);
  alert("You Clicked " + item + " " + event.type + " " + index);
}
const Body = (props) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert({});
  };
  return (
    <div className="main">
      <section className="body-item">
        <Pfruites fru={props.frute} />
      </section>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <footer>
        <h2>Thanks For Visiting</h2>
      </footer>
    </div>
  );
};
export default Body;
