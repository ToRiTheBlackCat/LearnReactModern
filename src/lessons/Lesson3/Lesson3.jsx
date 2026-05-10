import { useState } from "react";
import CoolButton from "./CoolButton";

const Lesson3 = (props) => {
  const [name, setName] = useState("");
  return (
    <div>
      <label>Name:</label>
      <input
        type={"text"}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div>Your name is {name}</div>
      <CoolButton btnClass="primary" title="Primary Button" />
      <CoolButton btnClass="warning" title="Warning Button" />
    </div>
  );
};

export default Lesson3;
