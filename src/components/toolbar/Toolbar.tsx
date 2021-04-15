import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral";
import { Car } from "../../model/car";
import styles from "./Toolbar.module.scss";

interface ToolbarProps {
  car: Car;
  name: string;
}

export const Toolbar = connect(
  { car: state`selectedCar`, name: state`name` },
  ({ car, name }: ToolbarProps) => {
    return (
      <nav className={styles.Toolbar}>
        <div className="logo">CarApp | {name}</div>
        {!!car && (
          <div className="current">
            {car.make} {car.model}
          </div>
        )}
      </nav>
    );
  }
);