import React from 'react';
import {Link } from 'react-router-dom';

function CarListTableRow(props) {
    const car = props.carData;
    return(
        <tr>
            <td>{car.maker}</td>
            <td>{car.model}</td>
            <td>{car.plates}</td>
            <td className="list-actions">
                <ul>
                    <li><Link to={`details/${car._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`delete/${car._id}`} className="list-actions-button-delete">Usuń</Link></li>
                    <li><Link to={`edit/${car._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                </ul>
            </td>
        </tr>
    )
}
export default CarListTableRow