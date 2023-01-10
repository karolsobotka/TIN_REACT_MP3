import React from 'react';
import EmployeeListTableRow from './employeeListTableRow';

function EmployeeListTable(props) {
    const employees = props.empList;
    return(
        <table className="table-list">
            <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Nr telefonu</th>
                    <th>Adres</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(emp =>
                    <EmployeeListTableRow empData={emp} key={emp._id}/>
                )}
            </tbody>
        </table>
    )
}

export default EmployeeListTable