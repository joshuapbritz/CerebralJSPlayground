import React from "react";
import { connect } from "@cerebral/react";
import { sequences } from "cerebral";
import styles from "./AddVehicle.module.scss";
import { Car } from "../../model/car";
import { useHistory } from "react-router";

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
              const data = new FormData(event.target as any);
              const newCar: Partial<Car> = {
                make: data.get("make")?.toString(),
                model: data.get("model")?.toString(),
                color: {
                  name: data.get("colorname")?.toString() as any,
                  value: data.get("colorvalue")?.toString() as any,
                },
              };

              addCar({ car: newCar });
              push("/");
            }}
          >
            <div className="form-control">
              <input placeholder="Make" type="text" name="make" />
            </div>

            <div className="form-control">
              <input placeholder="Model" type="text" name="model" />
            </div>

            <div className="form-row">
              <div className="form-control">
                <input placeholder="Color" type="text" name="colorname" />
              </div>

              <div className="form-control">
                <input
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
      </div>
    );
  }
);
