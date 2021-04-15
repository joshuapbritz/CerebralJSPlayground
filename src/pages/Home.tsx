import React from "react";
import { connect } from "@cerebral/react";
import { state, sequences } from "cerebral";

export const Home = connect(
  { value: state`value`, age: state`age`, changeName: sequences`changeName` },
  ({ value, changeName, age }) => {
    return (
      <div className="Home">
        <h1>
          {value} {age.toString()}
        </h1>
        <hr />
        <input type="text" id="text" />
        <hr />
        <button
          onClick={() => {
            const id = document.getElementById("text") as any;
            const name = id.value?.trim();
            if (!name) return;
            changeName({ name });
            id.value = "";
          }}
        >
          Change
        </button>
      </div>
    );
  }
);
