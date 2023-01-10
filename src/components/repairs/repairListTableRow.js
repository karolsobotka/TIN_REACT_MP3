import React from 'react';
import {Link } from 'react-router-dom';

function RepairListTableRow(props) {
    const repair = props.repairData;
    return(
        <tr>
            <td>{repair.car.maker+ " "+ repair.car.model}</td>
            <td>{repair.employee.firstName+ " "+repair.employee.lastName}</td>
            <td>{repair.description}</td>
            <td>{repair.repairment_date}</td>
            <td className="list-actions">
                <ul>
                    <li><Link to={`/details/${repair._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`/delete/${repair._id}`} className="list-actions-button-delete">Usuń </Link></li>
                    <li><Link to={`/edit/${repair._id}`} className="list-actions-button-edit">Edytuj </Link></li>
                </ul>
            </td>
        </tr>
    )
}
export default RepairListTableRow