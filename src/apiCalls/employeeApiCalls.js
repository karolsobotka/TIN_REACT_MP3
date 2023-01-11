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

export function addEmployeeApiCall(emp) {
    const empString = JSON.stringify(emp);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: empString
    }
    const promise = fetch(employeesBaseUrl, options);
    return promise;


} 

export function updateEmployeeApiCall(empId, emp) {
    const url = `${employeesBaseUrl}/${empId}`
    const empString = JSON.stringify(emp);
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: empString
    }
    const promise = fetch(url, options);
    return promise;
}