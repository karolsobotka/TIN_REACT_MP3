import React from 'react';
import Header from './components/fragments/header';
import Navigation from './components/fragments/navigation';
import MainContent from './components/other/mainContent';
import Footer from './components/fragments/footer';
import Employees from './components/employees';
import EmployeeDetails from './components/employee/employeeDetails';
import EmployeeForm from './components/employee/employeeForm';
import CarDetails from './components/car/carDetails';
import Cars from './components/cars'; 
import CarForm from './components/car/carForm';
import Repairs from './components/repairs';
import RepairDetails from './components/repairs/repairDetails';
import RepairForm from './components/repairs/repairForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router> 
        <div>
          <Header/>
          <Navigation/> 
          <Routes>
            <Route  path='/' element={<MainContent/>} />

            <Route path='/employees' element={<Employees/>} />
            <Route path='/employees/details/:empId' element={<EmployeeDetails/>} />
            <Route path='/employees/add' element={<EmployeeForm/>} />
            <Route path='/employees/edit/:empId' element={<EmployeeForm/>} />

            <Route path='/cars' element={<Cars/>} />
            <Route path='/cars/edit/:carId' element={<CarForm/>} />
            <Route path='/cars/add' element={<CarForm/>} />
            <Route path='/cars/details/:carId' element={<CarDetails/>} />

            <Route path='/repairs' element={<Repairs/>} />
            <Route path='/repairs/add' element={<RepairForm/>} />
            <Route path='/repairs/edit/:repairId' element={<EmployeeForm/>} />
            <Route path='/repairs/details/:repairId' element={<RepairDetails/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
