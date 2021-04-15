export interface Car {
  id: string;
  make: string;
  model: string;
  color: CarColor;
}

export interface CarColor {
  name: string;
  value: string;
}
