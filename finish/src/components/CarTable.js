import React from 'react';
import PropTypes from 'prop-types';

import { EditCarRow } from './EditCarRow';
import { ViewCarRow } from './ViewCarRow';

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th><label htmlFor="make-input">Make</label></th>
        <th><label htmlFor="model-input">Model</label></th>
        <th><label htmlFor="year-input">Year</label></th>
        <th><label htmlFor="color-input">Color</label></th>
        <th><label htmlFor="price-input">Price</label></th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => car.id === editCarId
        ? <EditCarRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar} />
        : <ViewCarRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

};

CarTable.defaultProps = {
  cars: [],
  editCarId: 0,
}

CarTable.propTypes = {
  cars: PropTypes.array,
  editCarId: PropTypes.number,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
