import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral";
import "./Home.scss";
import { Car } from "../../model/car";
import { NavLink } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";

interface HomeProps {
  name: string;
  surname: string;
  car: Car;
}

export const Home = connect(
  {
    name: state`name`,
    surname: state`surname`,
    car: state`selectedCar`,
  },
  (props: HomeProps) => {
    return (
      <>
        <Sidebar />

        <div className="Home">
          <h1>
            Hello{" "}
            <strong>
              {props.name} {props.surname}
            </strong>
          </h1>

          {!!props.car && (
            <div className="VehicleDetails">
              <table>
                <tbody>
                  <tr>
                    <td>Property</td>
                    <td>Value</td>
                  </tr>

                  <tr>
                    <td>Make and Model</td>
                    <td>
                      {props.car.make} {props.car.model}
                    </td>
                  </tr>

                  <tr>
                    <td>Color</td>
                    <td>
                      <span
                        className="swatch"
                        style={{ backgroundColor: props.car.color?.value }}
                      ></span>

                      {props.car.color?.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {!!props.car && (
            <details>
              <summary>
                <span>State Details</span>
              </summary>

              <article>
                <code>
                  <pre>{JSON.stringify(props.car, null, 4)}</pre>
                </code>
              </article>
            </details>
          )}

          {!props.car && (
            <>
              <p>
                You have no cars selected. Please select a car from the list of
                cars or <NavLink to="/add-vehicle">add a new car</NavLink>.
              </p>
            </>
          )}

          <NavLink className="fab" to="/add-vehicle">
            Add Vehicle
          </NavLink>
        </div>
      </>
    );
  }
);
