import React from 'react';
import {getFormattedDate} from '../../helpers/dateHelper';

function EmployeeDetailsData(props) {

    const emp = props.empData;
    return(
        <React.Fragment>
            <p>Imię: {emp.firstName}</p>
            <p>Nazwisko: {emp.lastName}</p>
            <p>Telefon: {emp.phone_number}</p>
            <p>Adres: {emp.address}</p>
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
                {emp.repairment.map(repair =>
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
export default EmployeeDetailsData;
