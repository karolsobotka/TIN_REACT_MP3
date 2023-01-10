const employeesBaseUrl = 'http://localhost:3000/api/employee'

export function getEmployeeApiCall() {
    const promise = fetch(employeesBaseUrl);
    return promise;
}

export function getEmployeeByIdApiCall(empId) {
    const url = `${employeesBaseUrl}/${empId}`;
    const promise = fetch(url);
    // const emp = employeeDetailsList.find(emp => emp._id ===empId);
    return promise;
}