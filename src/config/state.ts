import { Car } from "../model/car";
import { state } from "cerebral";

const State = {
  name: "Joshua",
  surname: "Britz",
  selectedCar: null,
  carCount: (get: any) => {
    const cars: Car[] = get(state`cars`);
    const count = cars?.length ?? 0;
    return `${count} car${count === 1 ? "" : "s"}`;
  },
  cars: [
    {
      id: "ghj787gyuyg",
      make: "Toyota",
      model: "Conquest",
      color: { name: "Blue", value: "#000099" },
    },
    {
      id: "kjhg7686g6g",
      make: "Ford",
      model: "Focus",
      color: { name: "Silver", value: "#99ccff" },
    },
    {
      id: "d54dg7jhgy7",
      make: "Suzuki",
      model: "Swift",
      color: { name: "Red", value: "#e62e00" },
    },
  ],
};

export default State;
