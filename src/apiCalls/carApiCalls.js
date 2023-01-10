import { carList, carDetailsList } from "./carApiMockData";

export function getCarApiCall() {
    return carList;
}

export function getCarByIdApiCall(carId) {
    const car = carDetailsList.find(car => car._id ===carId);
    return car;
}