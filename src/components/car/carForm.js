import React from 'react';
import {Link} from 'react-router-dom';

class CarForm extends React.Component {
    render() {
        return (
            <main>
                <h2>Nowy Samochód</h2>
                <form className="form">
                    <label htmlFor="maker">Marka:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="maker" id="maker" placeholder="2-60 znaków" value=""/>
                    <span id="errorMaker" className="errors-text"></span>

                    <label htmlFor="model">Model:<abbr title="requried" aria-label="required">*</abbr></label>
                    <input type="text" name="model" id="model" placeholder="2-60 znaków" value=""/>
                    <span id="errorModel" className="errors-text"></span>

                    <label htmlFor="plates">Adres:<abbr title="requried" aria-label="required">*</abbr></label>
                    <input type="text" name="plates" id="plates" placeholder="WWL 33220" value=""/>
                    <span id="errorPlates" className="errors-text"></span>

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

export default CarForm