import React from 'react';
import {getFormattedDate} from '../../helpers/dateHelper';

function CarDetailsData(props) {

    const car = props.carData;
    return(
        <React.Fragment>
            <p>Marka: {car.maker}</p>
            <p>Model: {car.model}</p>
            <p>Numery Rejestracyjne: {car.plates}</p>
            <h2>Szczegóły napraw</h2>
            <thead>
                <tr>
                    <th>Auto</th>
                    <th>Mechanik</th>
                    <th>Opis</th>
                    <th>Data Naprawy</th>
                </tr>
            </thead>
            <tbody>
                {car.repairment.map(repair =>
                        <tr key={repair._id}>
                            <td>{repair.car.model + " " + repair.car.maker}</td>
                            <td>{repair.mechanic.firstName + " " + repair.mechanic.lastName}</td>
                            <td>{repair.description}</td>
                            <td>{repair.repairment_date ? getFormattedDate(repair.repairment_date) : "" }</td>
                        </tr>
                    )}
            </tbody>
        </React.Fragment>
    )
}
export default CarDetailsData;
