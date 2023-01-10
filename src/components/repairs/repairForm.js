import React from 'react';
import {Link} from 'react-router-dom';
import {getEmployeeApiCall} from '../../apiCalls/employeeApiCalls';
import {getCarApiCall} from '../../apiCalls/carApiCalls';

class RepairForm extends React.Component {
    render() {
        console.log(getEmployeeApiCall());
        const allEmps = getEmployeeApiCall();
        const allCars = getCarApiCall();

        return (
            <main>
                <h2>Nowa Naprawa</h2>
                <form className="form">
                    <label htmlFor="employee">Mechanik: <abbr title="required" aria-label="required">*</abbr></label>
                    <select id="employee" name="empId" required>
                        <option value="">--- Wybierz mechanika ---</option>
                        {allEmps.map(emp => 
                            (<option key={emp._id} value={emp._id} label={emp.firstName + " " + emp.lastName}></option>)    
                        )}
                    </select>
                    <span id="errorEmployee" className="errors-text"></span>

                    <label htmlFor="car">Car: <abbr title="required" aria-label="required">*</abbr></label>
                    <select id="car" name="carId" required>
                        <option value="">--- Wybierz auto ---</option>
                        {allCars.map(car => 
                            (<option key={car._id} value={car._id} label={car.maker + " " + car.model}></option>)    
                        )}
                    </select>
                    <span id="errorCar" className="errors-text"></span>
                    
                    <label htmlFor="description">Opis</label>
                    <input type="text" name="description" value="" id="salary" placeholder="2000 - 1000000" />
                    <span id="errorDescription" className="errors-text"></span>

                    <label htmlFor="repairment_date">Data naprawy:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="date" name="repairment_date"  id="repairment_date" required />
                    <span id="errorRepairmentDate" className="errors-text"></span>
                   
                    <div className="form-buttons">
                        <p id="errorsSummary" className="errors-text"></p>
                        <input className="form-button-submit" type="submit" value="Dodaj" />
                        <Link to="/repairs" className="form-button-cancel">Anuluj</Link>
                    </div>
                </form>
            </main>
        )
    }
}

export default RepairForm