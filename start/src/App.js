import React, { useState } from 'react';

import { carsPropType } from './propTypes';
import { ToolHeader, CarTable, CarForm } from './components';

export const App = ({
  cars: initialCars,
}) => {

  const [ cars, setCars ] = useState(initialCars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const appendCar = car => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  };

  const replaceCar = car => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={setEditCarId} onDeleteCar={deleteCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;
};

App.defaultProps = {
  cars: [],
};

App.propTypes = {
  cars: carsPropType,
};
