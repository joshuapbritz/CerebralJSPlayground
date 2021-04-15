import React from "react";
import { connect } from "@cerebral/react";
import { state, sequences } from "cerebral";

export const Home = connect(
  {
    name: state`name`,
    age: state`age`,
    surname: state`surname`,
    changeName: sequences`changeName`,
  },
  ({ name, surname, changeName, age }) => {
    return (
      <div className="Home">
        <h1>
          {name} {surname} {age.toString()}
        </h1>
        <hr />
        <input type="text" id="text" />
        <hr />
        <button
          onClick={() => {
            const id = document.getElementById("text") as any;
            const value = id.value?.trim();
            if (!value) return;
            changeName({ name: value });
            id.value = "";
          }}
        >
          Change
        </button>
      </div>
    );
  }
);
