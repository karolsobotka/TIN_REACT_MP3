import React from 'react';
import { Link } from 'react-router-dom';
import { getEmployeeByIdApiCall } from '../../apiCalls/employeeApiCalls';
import  EmployeeDetailsData  from './employeeDetailsData';


class  EmployeeDetails extends React.Component  {

    constructor(props) {
        super(props);
        let { empId } = this.props.match.params;
        this.state = {
            empId: empId,
            emp: null,
            error: null,
            isLoaded: false,
            message: null
        }
    }

    fetchEmployeeDetails = () => {
        getEmployeeByIdApiCall(this.state.empId)
        .then(res => res.json())
        .then((data) => {
            if(data.message) {
                this.setState({
                    emp:null,
                    message: data.message
                })
            }
            else {
                this.setState({
                    emp:data, 
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
        })
}
    componentDidMount() {
        this.fetchEmployeeDetails()
    }
    

    render(){    

        const {emp, error, isLoaded, message} = this.state
        let content;

        if(error) {
            content = <p> Błąd: {error.message}</p>
        }
        else if(!isLoaded) {
            content = <p>Ładowanie danych pracowników ... </p>
        }
        else if(message) {
            content = <p>{message} </p>
        }
        else {
            content = <EmployeeDetailsData empData={emp} />
        }

        return (
            <main>
                <h2>Szczegóły pracownika</h2>
                {content}
                <div className="form-buttons">
                    <Link to="/employees" className="form-button-cancel">Powrót</Link>
                </div>
            </main>
        )
    }
    
}
export default EmployeeDetails;