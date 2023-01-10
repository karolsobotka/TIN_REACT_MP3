export const employeeList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "phone_number": "123123123",
        "address": "WWA Lukowska 1",
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "phone_number": "123123123",
        "address": "WWA Lukowska 1",
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "phone_number": "123123123",
        "address": "WWA Lukowska 1",
    }
]

export const employeeDetailsList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "phone_number": "123123123",
        "address": "WWA Lukowska 1",
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
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "phone_number": "123123123",
        "address": "WWA Lukowska 1",
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
            "repairment_date": "2022-02-01"}
            
        ]
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "phone_number": "123123123",
        "address": "WWA Lukowska 1",
        "repairs": []
    }
]