import React from "react";
import { connect } from "@cerebral/react";
import { sequences } from "cerebral";
import styles from "./AddVehicle.module.scss";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import * as act from "./AddVehicle.actions";

export const AddVehicle = connect(
  {
    addCar: sequences`addCar`,
  },
  ({ addCar }: any) => {
    const { push } = useHistory();

    return (
      <div className={styles.AddVehicle}>
        <header>
          <h1>Add a new Vehicle</h1>
        </header>

        <article>
          <form
            id="vehicle-form"
            onSubmit={(event) => {
              event.preventDefault();
              act.submitForm(event.target as any).then((car) => {
                addCar({ car });
                push("/");
              });
            }}
          >
            <div className="form-control">
              <input required placeholder="Make" type="text" name="make" />
            </div>

            <div className="form-control">
              <input required placeholder="Model" type="text" name="model" />
            </div>

            <div className="form-row">
              <div className="form-control">
                <input
                  required
                  placeholder="Color"
                  type="text"
                  name="colorname"
                />
              </div>

              <div className="form-control">
                <input
                  required
                  placeholder="Color value"
                  type="color"
                  name="colorvalue"
                />
              </div>
            </div>

            <div className="form-control">
              <button>SAVE</button>
            </div>
          </form>
        </article>

        <NavLink to="/" className="fab">
          cancel
        </NavLink>
      </div>
    );
  }
);
