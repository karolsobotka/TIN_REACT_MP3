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
            // const  employees = getEmployeeApiCall();
            // return (

            //     <main>
            //         <table className="table-list">
            //          <thead>
            //              <tr>
            //                  <th>Imię</th>
            //                  <th>Nazwisko</th>
            //                  <th>Numer Telefonu</th>
            //                  <th>Adres</th>
            //                  <th>Akcje</th>
            //              </tr>
            //          </thead>
            //          <tbody>
            //          {employees.map(emp => (
            //              <tr key={emp._id}>
            //              <td>{emp.firstName}</td>
            //              <td>{emp.lastName}</td>
            //              <td>{emp.phone_number}</td>
            //              <td>{emp.address}</td>
            //              <td className="list-actions">
            //                 <ul>
            //                     <li><Link to={`details/${emp._id}`} className="list-actions-button-details">Szczegóły</Link></li>
            //                     <li><Link to={`delete/${emp._id}`} className="list-actions-button-delete">Usuń Pracownika</Link></li>
            //                     <li><Link to={`edit/${emp._id}`} className="list-actions-button-edit">Edytuj Pracownika</Link></li>
            //                 </ul>
            //              </td>
            //          </tr>
            //          ))}
            //          </tbody>
                     
            //          </table>
            //         <p><Link to="/employees/add" className="button-add">Dodaj nowego pracownika</Link></p>
            //      </main>
                 
            
                    
            //     )
        }

}

export default Employees;
   
