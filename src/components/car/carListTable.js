import React from 'react';
import CarListTableRow from './carListTableRow';

function CarListTable(props) {
    const car = props.carList;
    return(
        <table className="table-list">
            <thead>
                <tr>
                    <th>Model</th>
                    <th>Marka</th>
                    <th>Numery Rejestracyjne</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {car.map(car =>
                    <CarListTableRow carData={car} key={car._id}/>
                )}
            </tbody>
        </table>
    )
}

export default CarListTable