import { Car } from "../../model/car";

export const submitForm = (form: HTMLFormElement) => {
  return new Promise((resolve) => {
    const data = new FormData(form);
    const newCar: Partial<Car> = {
      make: data.get("make")?.toString(),
      model: data.get("model")?.toString(),
      color: {
        name: data.get("colorname")?.toString() as any,
        value: data.get("colorvalue")?.toString() as any,
      },
    };

    resolve(newCar);
  });
};
