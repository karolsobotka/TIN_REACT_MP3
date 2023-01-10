import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCarByIdApiCall } from '../../apiCalls/carApiCalls';
import { getFormattedDate } from '../../helpers/dateHelper';

function CarDetails() {
    let { carId } = useParams()
    carId = parseInt(carId)
    const car = getCarByIdApiCall(carId)

    return (
        <main>
            <h2>Szczegóły Auta</h2>
            <p>Marka: {car.maker}</p>
            <p>Model: {car.model} </p>
            <p>Numer Rejestracyjny: {car.plates} </p>

            <h2>Szczegóły Napraw</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Auto</th>
                        <th>Mechanik</th>
                        <th>Opis naprawy</th>
                        <th>Data naprawy</th>
                    </tr>
                </thead>
                <tbody>
                    {car.repairs.map(
                        repair =>
                            <tr key={repair._id}>
                                <td>{repair.car.Model}</td>
                                <td>{repair.mechanic.firstName}</td>
                                <td>{repair.description }</td>
                                <td>{repair.repairment_date ? getFormattedDate(repair.repairment_date) : ""}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <div className="form-buttons">
                <Link to="/cars" className="form-button-cancel">Powrót</Link>
            </div>
        </main>
    )
}
export default CarDetails