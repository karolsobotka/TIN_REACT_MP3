import { repairList, repairDetailsList } from "./repairApiMockData";

export function getRepairApiCall() {
    return repairList;
}

export function getRepairByIdApiCall(repairId) {
    const repair = repairDetailsList.find(repair => repair._id ===repairId);
    return repair;
}
