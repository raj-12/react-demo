import React, { Component } from "react";
import { connect } from "react-redux";

class Child extends Component {
  incrementParentCounter = () => {
    this.props.dispatch({ type: "INCREMENT_PARENT" });
  };
  StringCounter = () => {
    this.props.dispatch({ type: "STRING" });
  };

  functionvalues(){
    var name=document.getElementById("name");
    var age=document.getElementById("age");
    var salary=document.getElementById("salary");
    console.log("Age"+age.value)
    console.log("Salary"+salary.value)

  }

  render() {
      
    return (
      <div className="child-component">
        <div>This is the child component - [COUNTER: {this.props.counter}]</div>
        <button onClick={this.incrementParentCounter}>
          Increment Parent Counter
        </button>
        <br></br>
        <div>
          <label>Name: </label>
          <input id="name"></input>
        <br></br>
          <label>Salary: </label>
          <input id="salary"></input>
        <br></br>
          <label>Age:  </label>
          <input id="age"></input>
        <br></br>
          <button onClick={this.StringCounter}>
          String
        </button>
        </div>
      </div>
    );
  } 
}

const mapStateToProps = (state) => ({
  counter: state.strings.push("0"),
});

export default connect(mapStateToProps)(Child);