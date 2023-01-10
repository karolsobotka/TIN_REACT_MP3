import React from 'react';
import {Link} from 'react-router-dom';

class EmployeeForm extends React.Component {
    render() {
        return (
            <main>
                <h2>Nowy Mechanik</h2>
                <form className="form">
                    <label htmlFor="firstName">Imię:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="firstName" id="firstName" placeholder="2-60 znaków" value=""/>
                    <span id="errorFirstName" className="errors-text"></span>

                    <label htmlFor="lastName">Nazwisko:<abbr title="requried" aria-label="required">*</abbr></label>
                    <input type="text" name="lastName" id="lastName" placeholder="2-60 znaków" value=""/>
                    <span id="errorLastName" className="errors-text"></span>

                    <label htmlFor="phone_number">Nr Telefonu: +48</label> 
                    <input type="text" name="phone_number" id="phone_number" placeholder="123456789"/>
                    <span id="errorPhoneNumber" className="errors-text"></span>

                    <label htmlFor="address">Adres:<abbr title="requried" aria-label="required">*</abbr></label>
                    <input type="text" name="address" id="address" placeholder="2-60 znaków" value=""/>
                    <span id="errorAddress" className="errors-text"></span>

                    <div className="form-buttons">
                        <p id="errorsSummary" className="errors-text"></p>
                        <input className="form-button-submit" type="submit" value="dodaj"/>
                        <Link to="/employees" className="form-button-cancel">Anuluj</Link>
                    </div>
                </form>
            </main>
        )
    }
}

export default EmployeeForm