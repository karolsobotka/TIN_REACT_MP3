import React from 'react';
import { getFormattedDate} from '../../helpers/dateHelper';

function RepairDetailsData(props){
const repair = props.repairData;
const repairDate = repair.repairment_date ? getFormattedDate(repair.repairment_date) : "";

return (
    <React.Fragment>
        <p>Auto: {repair.car.maker +" " + repair.car.model}</p>
        <p>Mechanik: {repair.employee.firstName+ " "+ repair.employee.lastName}</p>
        <p>Opis: {repair.description}</p>
        <p>Data Naprawy: {repairDate}</p>
        </React.Fragment>
)

}

export default RepairDetailsData