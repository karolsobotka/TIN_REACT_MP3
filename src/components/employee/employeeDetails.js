import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getEmployeeByIdApiCall } from '../../apiCalls/employeeApiCalls';
import { getFormattedDate } from '../../helpers/dateHelper';

function EmployeeDetails() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)

    return (
        <main>
            <h2>Szczegóły pracownika</h2>
            <p>Imię: {emp.firstName}</p>
            <p>Nazwisko: {emp.lastName} </p>
            <p>Numer Telefonu: {emp.phone_number} </p>

            <h2>Szczegóły Napraw</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Auto</th>
                        <th>Mechanik</th>
                        <th>Opis naprawy</th>
                        <th>Data nprawy</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.repairs.map(
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
                <Link to="/employees" className="form-button-cancel">Powrót</Link>
            </div>
        </main>
    )
}
export default EmployeeDetails