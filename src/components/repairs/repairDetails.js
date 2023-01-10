import React from 'react';
import {Link, useParams } from 'react-router-dom';
import {getRepairByIdApiCall} from '../../apiCalls/repairApiCalls';
import {getFormattedDate} from '../../helpers/dateHelper';

function RepairDetails() {
    const {repairId} = useParams();
    const repair = getRepairByIdApiCall(repairId);
    console.log(repair);
    const date = repair.repairment_date ? getFormattedDate(repair.repairment_date) : "";
    
    return (
        <main>
            <h2>Szczegóły naprawy</h2>
            <p>Auto: {repair.car.maker + " " + repair.car.Model}</p>
            <p>Mechanik: {repair.mechanic.firstName + " " + repair.mechanic.lastName}</p>
            <p>Opis: {repair.description}</p>
            <p>Data naprawy: {date}</p>

            <div className="form-buttons">
                <Link to="/repairs" className="button-cancel">Powrót</Link>
            </div>

        </main>

    )

}
export default RepairDetails