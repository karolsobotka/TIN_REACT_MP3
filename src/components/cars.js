import React from 'react';
import {Link} from 'react-router-dom';
import {getCarApiCall } from '../apiCalls/carApiCalls';

function Cars() {
    const cars = getCarApiCall();
    return (
<main>
           <table className="table-list">
            <thead>
            <tr>
                <th>Marka</th>
                <th>Model</th>
                <th className="hide-collumn">Numer Rejestracyjny</th>
                <th>Akcje</th>

            </tr>
            </thead>
            <tbody>
                {cars.map(car => (
            <tr key={car._id}>
                <td>{car.maker}</td>
                <td>{car.model}</td>
                <td>{car.plates}</td>
                <td className="list-actions"><ul>
                    <li><Link to={`details/${car._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`delete/${car._id}`} className="list-actions-button-delete">Usuń</Link></li>
                    <li><Link to={`edit/${car._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                </ul></td>
                
            </tr>
                ))}
            
            </tbody>
           </table>
           <p><Link to="/cars/add" className="button-add">Dodaj nowe auto</Link></p>
        </main>
    )
}

export default Cars

