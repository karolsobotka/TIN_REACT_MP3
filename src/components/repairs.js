import React from 'react';
import {Link} from 'react-router-dom';
import {getRepairApiCall} from '../apiCalls/repairApiCalls';

function Repairs() {
    const  repairs = getRepairApiCall();
    

    return( 
        <main>
        <table className="table-list">
         <thead>
             <tr>
                 <th>Auto</th>
                 <th>Mechanik</th>
                 <th>Opis naprawy</th>
                 <th>Data naprawy</th>
                 <th>Akcje</th>
             </tr>
         </thead>
         <tbody>
         {repairs.map(repair => (
            <tr>
                <td>{repair.car.Model}</td>
                <td>{repair.mechanic.firstName}</td>
                <td>{repair.description}</td>
                <td>{repair.repairment_date}</td>
                <td className="list-actions">
                <ul>
                    <li><Link to={`details/${repair._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`delete/${repair._id}`} className="list-actions-button-delete">Usuń naprawę</Link></li>
                    <li><Link to={`edit/${repair._id}`} className="list-actions-button-edit">Edytuj Naprawę</Link></li>
                </ul>
                </td>
            </tr>
         ))}
         </tbody>
        </table>
        <p><a href="/repairs/add" className="button-add">Dodaj nową naprawę</a></p>
     </main>
    )
}

export default Repairs