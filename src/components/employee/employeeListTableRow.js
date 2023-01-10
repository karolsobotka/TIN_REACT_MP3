import React from 'react';
import {Link } from 'react-router-dom';

function EmployeeListTableRow(props) {
    const emp = props.empData;
    return(
        <tr>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{emp.phone_number}</td>
            <td>{emp.address}</td>
            <td className="list-actions">
                <ul>
                    <li><Link to={`details/${emp._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`delete/${emp._id}`} className="list-actions-button-delete">Usuń Pracownika</Link></li>
                    <li><Link to={`edit/${emp._id}`} className="list-actions-button-edit">Edytuj Pracownika</Link></li>
                </ul>
            </td>
        </tr>
    )
}
export default EmployeeListTableRow