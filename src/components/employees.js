import React from 'react';
import {Link} from 'react-router-dom';
import {getEmployeeApiCall } from '../apiCalls/employeeApiCalls';
import EmployeesListTable from './employee/employeeListTable';

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            employees: []
        }
    };


    fetchEmployeeList = () => {
        getEmployeeApiCall()
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoaded: true,
                employees: data
        });
    },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}

componentDidMount() {
    this.fetchEmployeeList();
}

    render(){
        const {error, isLoaded, employees} = this.state;
        let content;
        
        if(error) {
            content = <p> Błąd: {error.message}</p>
        }
        else if(!isLoaded) {
            content = <p>Ładowanie danych pracowników ... </p>
        }
        else {
            content = <EmployeesListTable empList={employees} />
        }

        return (
            <main>
                <h2>Lista Mechaników</h2>
                {content}
                <p className="form-buttons">
                    <Link to="/employees/add" className="button-add">Dodaj Nowego Mechanika</Link>
                </p>
            </main>
        )
        }

}

export default Employees;
   
