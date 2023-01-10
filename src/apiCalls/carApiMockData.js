export const carList = [
    {
        "_id": 1,
        "maker": "Mercedes",
        "model": "Kowalski",
        "plates": "123123123",
    },
    {
        "_id": 2,
        "maker": "audi",
        "model": "Kowalski",
        "plates": "2",
    }
]

export const carDetailsList = [
    {
        "_id": 1,
        "maker": "Mercedes",
        "model": "Kowalski",
        "plates": "123123123",
        "repairs": [
            {
                "_id": 1,
                "car":{
                    "car_id": 1,
                    "maker": "Audi",
                    "Model": "quatro"
                },
                "mechanic":{
                    "mechanic_id": 1,
                    "firstName": "Karol",
                    "lastName": "Naasdas"
                },
                "description": "adsda",
                "repairment_date": "2022-01-01"
            }
            
            
                     
        ]
    },
    {
        "_id": 1,
        "maker": "Audi",
        "model": "Kowalski",
        "plates": "2",
        "repairs": [
            {
                "_id": 1,
                "car":{
                    "car_id": 1,
                    "maker": "Audi",
                    "Model": "quatro"
                },
                "mechanic":{
                    "mechanic_id": 1,
                    "firstName": "Karol",
                    "lastName": "Naasdas"
                },
                "description": "adsda",
                "repairment_date": "2022-01-01"
            }
            
        ]
    }
]