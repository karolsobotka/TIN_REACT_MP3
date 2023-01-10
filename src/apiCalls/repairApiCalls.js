const repairsBaseUrl = 'http://localhost:3000/api/repairment'

export function getRepairApiCall() {
    const promise = fetch(repairsBaseUrl);

    return promise;
}

export function getRepairByIdApiCall(repairId) {
    const url = `${repairsBaseUrl}/${repairId}`;
    const promise = fetch(url);
    return promise;
}
