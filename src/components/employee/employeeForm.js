import React from 'react';
import {Link} from 'react-router-dom';
import formMode from '../../helpers/formHelper';
import { checkRequired, checkTextLengthRange, checkPhoneNumber } from '../../helpers/validationCommon';
import { getEmployeeByIdApiCall, addEmployeeApiCall, updateEmployeeApiCall} from '../../apiCalls/employeeApiCalls';
import FormInput from '../../form/FormInput';
import FormButtons from '../../form/formButtons';

class EmployeeForm extends React.Component {

    constructor(props) {
        super(props);

        const paramsEmpId = props.match.params.empId;
        const currentFormMode = paramsEmpId ? formMode.EDIT : formMode.NEW;

        this.state = {
            empId: paramsEmpId,
            emp: {
                firstName: '',
                lastName: '',
                phone_number: '',
                address: '',
            },
            errors:{
                firstName: '',
                lastName: '',
                phone_number: '',
                address: '',
            },
            formMode: currentFormMode,
            redirect: false,
            error: null
        }
    }

    fetchEmployeeDetails = () => {
        getEmployeeByIdApiCall(this.state.empId)
        .then(res => res.json())
        .then(
            (data)=> {
                if(data.message){
                    this.setState({

                    })
                } else {
                    this.setState({
                        emp: data,
                        message: null
                    })
                }
                this.setState({ 
                    isLoaded: true,
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        
        )
    }

    componentDidMount = () => {
        const currentFormMode = this.state.formMode
        if( currentFormMode === formMode.EDIT){
            this.fetchEmployeeDetails();
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        const emp = { ...this.state.emp }
        emp[name] = value

        const errorMessage = this.validateField(name, value)
        const errors = {...this.state.errors }
        errors[name] = errorMessage

        this.setState({
            emp: emp,
            errors: errors
        })
    }

    validateField = (fieldName, fieldValue) => {
        let errorMessage = '';
        if(fieldName === 'firstName') {
            if(!checkRequired(fieldValue)){
                errorMessage = 'Pole jest wymagane'
            }else if (!checkTextLengthRange(fieldValue, 2, 60)){
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków'
            }
        }
        if(fieldName ==='lastName'){
            if(!checkRequired(fieldValue)){
                errorMessage = 'Pole jest wymagane'
            }else if (!checkTextLengthRange(fieldValue, 2, 60)){
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków'
            }
        }
        if(fieldName === 'phone_nubmer'){
            if (!checkTextLengthRange(fieldValue, 9, 9)){
                errorMessage = 'Pole powinno zawierać 9 znaków'
            }
            else if(!checkPhoneNumber(fieldValue)){
                errorMessage = 'Pole powinno zawierać prawidłowy numer telefonu';
            }
        }
        if(fieldName === 'address'){
            if(!checkRequired(fieldValue)){
                errorMessage = 'Pole jest wymagane'
            }else if (!checkTextLengthRange(fieldValue, 2, 60)){
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków'
            }
        }
        return errorMessage
    }
    
    validateForm = () => {
        const emp = this.state.emp;
        const errors = this.state.errors
        for(const fieldName in emp) {
            const fieldValue = emp[fieldName]
            const errorMessage = this.validateField(fieldName, fieldValue)
            errors[fieldName] = errorMessage
        }
        this.setState({
            errors: errors
        })
        return !this.hasErrors()
    }

    hasErrors = () => {
        const errors = this.state.errors
        for(const errorField in this.state.errors){
            if(errors[errorField].length > 0){
                return true;
            }
        }
        return false
    }



    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm()
        if (isValid) {
            const
                emp = this.state.emp,
                currentFormMode = this.state.formMode
            let
                promise,
                response;
            if (currentFormMode === formMode.NEW) {
                promise = addEmployeeApiCall(emp)
    
            } else if (currentFormMode === formMode.EDIT) {
                console.log(emp)
                const empId = this.state.empId
                promise = updateEmployeeApiCall(empId, emp)
            }
            if (promise) {
                promise
                    .then(
                        (data) => {
                            response = data
                            if (response.status === 201 || response.status === 500) {
                                return data.json()
                            }
                        })
                    .then(
                        (data) => {
                            if (!response.ok && response.status === 500) {
                                console.log(data)
                                for (const i in data) {
                                    const errorItem = data[i]
                                    const errorMessage = errorItem.message
                                    const fieldName = errorItem.path
                                    const errors = { ...this.state.errors }
                                    errors[fieldName] = errorMessage
                                    this.setState({
                                        errors: errors,
                                        error: null
                                    })
                                }
                            } else {
                                this.setState({ redirect: true })
                            }
                        },
                        (error) => {
                            this.setState({ error })
                            console.log(error)
                        }
                    )
            }
        }
    }
    
    render() {
        

            const { redirect } = this.state
    if (redirect) {
        const currentFormMode = this.state.formMode
        const notice = currentFormMode === formMode.NEW ? 'Pomyślnie dodano nowego pracownika' : 'Pomyślnie zaktualizowano nowego pracownika'
        return (
            <redirect to={{
                pathname: "/employees/",
                state: {
                    notice: notice
                }
            }} />
        )
    }

    const errorsSummary = this.hasErrors() ? 'Formularz zawiera błędy' : ''
    const fetchError = this.state.error ? `Błąd: ${this.state.error.message}` : ''
    const pageTitle = this.state.formMode === formMode.NEW ? 'Nowy pracownik' : 'Edycja pracownika'

    const globalErrorMessage = errorsSummary || fetchError || this.state.message

    return (
        <main>
            <h2>{pageTitle}</h2>
            <form className="form" onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    label="Imię"
                    required
                    error={this.state.errors.firstName}
                    name="firstName"
                    placeholder="2-60 znaków"
                    onChange={this.handleChange}
                    value={this.state.emp.firstName}
                />
                <FormInput
                    type="text"
                    label="Nazwisko"
                    required
                    error={this.state.errors.lastName}
                    name="lastName"
                    placeholder="2-60 znaków"
                    onChange={this.handleChange}
                    value={this.state.emp.lastName}
                />
                <FormInput
                    type="text"
                    label="Email"
                    required
                    error={this.state.errors.email}
                    name="email"
                    placeholder="np. nazwa@domena.pl"
                    onChange={this.handleChange}
                    value={this.state.emp.email}
                />
                <FormButtons
                    formMode={this.state.formMode}
                    error={globalErrorMessage}
                    cancelPath="/employees"
                />
            </form>
        </main >
            // <main>
            //     <h2>Nowy Mechanik</h2>
            //     <form className="form">
            //         <label htmlFor="firstName">Imię:<abbr title="required" aria-label="required">*</abbr></label>
            //         <input type="text" name="firstName" id="firstName" placeholder="2-60 znaków" value=""/>
            //         <span id="errorFirstName" className="errors-text"></span>

            //         <label htmlFor="lastName">Nazwisko:<abbr title="requried" aria-label="required">*</abbr></label>
            //         <input type="text" name="lastName" id="lastName" placeholder="2-60 znaków" value=""/>
            //         <span id="errorLastName" className="errors-text"></span>

            //         <label htmlFor="phone_number">Nr Telefonu: +48</label> 
            //         <input type="text" name="phone_number" id="phone_number" placeholder="123456789"/>
            //         <span id="errorPhoneNumber" className="errors-text"></span>

            //         <label htmlFor="address">Adres:<abbr title="requried" aria-label="required">*</abbr></label>
            //         <input type="text" name="address" id="address" placeholder="2-60 znaków" value=""/>
            //         <span id="errorAddress" className="errors-text"></span>

            //         <div className="form-buttons">
            //             <p id="errorsSummary" className="errors-text"></p>
            //             <input className="form-button-submit" type="submit" value="dodaj"/>
            //             <Link to="/employees" className="form-button-cancel">Anuluj</Link>
            //         </div>
            //     </form>
            // </main>
        )
    }
}

export default EmployeeForm