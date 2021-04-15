import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral";
import { Toolbar } from "../components/toolbar/Toolbar";
import "./Home.scss";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Car } from "../model/car";

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
  ({ name, surname, car }: HomeProps) => {
    return (
      <>
        <Toolbar />
        <Sidebar />

        <div className="Home">
          <h1>
            Hello{" "}
            <strong>
              {name} {surname}
            </strong>
          </h1>

          {!!car && (
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
                      {car.make} {car.model}
                    </td>
                  </tr>

                  <tr>
                    <td>Color</td>
                    <td>
                      {car.color?.name} {car.color?.value}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {!!car && (
            <details>
              <summary>
                <span>State Details</span>
              </summary>

              <article>
                <code>
                  <pre>{JSON.stringify(car, null, 4)}</pre>
                </code>
              </article>
            </details>
          )}

          {!car && <h3>Please select a car</h3>}
        </div>
      </>
    );
  }
);
