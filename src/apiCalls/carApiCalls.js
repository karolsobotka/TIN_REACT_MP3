const carsBaseUrl = 'http://localhost:3000/api/car'

export function getCarApiCall() {
    const promise = fetch(carsBaseUrl);

    return promise;
}

export function getCarByIdApiCall(carId) {
    const url = `${carsBaseUrl}/${carId}`;
    const promise = fetch(url);
    return promise;
}