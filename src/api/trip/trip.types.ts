export type City = {
  name: string;
  image: string;
};

export type Trip = {
  id: string;
  city: City;
  startDate: Date;
  endDate: Date;
};
