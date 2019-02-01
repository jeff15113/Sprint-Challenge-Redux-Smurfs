import React from "react";

const Smurf = props => {
  return (
    <div className="card">
      <div className="closebtn" onClick={e => props.deleteSmurf(e, props.id)} />
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
