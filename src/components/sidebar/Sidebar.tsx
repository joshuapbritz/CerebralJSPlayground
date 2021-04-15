import React from "react";
import { connect } from "@cerebral/react";
import { state, sequences } from "cerebral";
import { Car } from "../../model/car";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

export const Sidebar = connect(
  {
    cars: state`cars`,
    car$: state`selectedCar`,
    selectCar: sequences`selectCar`,
  },
  ({ cars, car$, selectCar }) => {
    return (
      <div className={styles.Sidebar}>
        <ul>
          {cars.map((car: Car) => {
            return (
              <li
                className={classNames({
                  [styles.active]: car?.id === car$?.id,
                })}
                key={car.id}
                onClick={() => {
                  selectCar({ car });
                }}
              >
                {car.make} {car.model}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);
