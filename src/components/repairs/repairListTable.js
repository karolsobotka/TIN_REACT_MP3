import React from 'react';
import RepairListTableRow from './repairListTableRow';

function RepairListTable(props) {
    const repairs = props.repairList;
    return(
        <table className="table-list">
            <thead>
                <tr>
                    <th>Auto</th>
                    <th>Mechanik</th>
                    <th>Opis Naprawy</th>
                    <th>Data Naprawy</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {repairs.map(repair =>
                    <RepairListTableRow repairData={repair} key={repair._id}/>
                )}
            </tbody>
        </table>
    )
}

export default RepairListTable