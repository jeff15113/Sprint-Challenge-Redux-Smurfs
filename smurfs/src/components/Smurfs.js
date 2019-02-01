import React, { Component } from "react";
import Smurf from "./Smurf";

class Smurfs extends Component {
  deleteSmurf = (e, id) => {
    e.persist();
    console.log(id);
  };

  render() {
    return (
      <div className="Smurfs">
        {console.log(this.props)}
        <h1>Smurf Village</h1>
        <ul className="cardcontainer">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                deleteSmurf={this.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
