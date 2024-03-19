document.addEventListener("DOMContentLoaded", () => {
    fetchContent()
})

function fetchContent(){
    fetch ("json server name here")
    .then(res => res.json())
    .then(data => {
        //do something w this data
    })
}






[
    {
        "countryName": "Algeria",
        "population": 44758398,
        "capital": "Algiers",
        "squareKilometers": 2381740,
        "religionsRepresented": ["Islam - Sunni"],
        "languagesRepresented": ["Arabic", "French", "Tamazight"],
        "occupiedBy": "France",
        "yearOfIndependence": 1962
    },
    {
        "countryName": "Morocco",
        "population": 37067420,
        "capital": "Casablanca",
        "squareKilometers": 716550,
        "religionsRepresented": ["Islam - Sunni"],
        "languagesRepresented": ["Arabic", "Tamazight", "French"],
        "occupiedBy": "France",
        "yearOfIndependence": 1956
    },
    {
        "countryName": "Tunisia",
        "population": 11976182,
        "capital": "Tunis",
        "squareKilometers": 163610,
        "religionsRepresented": ["Islam - Sunni"],
        "languagesRepresented": ["Arabic", "French", "Tamazight"],
        "occupiedBy": "France",
        "yearOfIndependence": 1956
    },
    {
        "countryName": "Libya",
        "population": 7252000,
        "capital": "Tripoli",
        "squareKilometers": 1759540,
        "religionsRepresented": ["Islam - Sunni", "Christian"],
        "languagesRepresented": ["Arabic", "Italian", "English", "Tamazight"],
        "occupiedBy": "Italy",
        "yearOfIndependence": 1947
    },
    {
        "countryName": "Egypt",
        "population": 109546000,
        "capital": "Cairo",
        "squareKilometers": 1002000,
        "religionsRepresented": ["Islam - Sunni", "Christian - Coptic"],
        "languagesRepresented": ["Arabic", "English", "French"],
        "occupiedBy": "England",
        "yearOfIndependence": 1956
    },
    {
        "countryName": "Cyprus (incl. both Greek and Turkish areas)",
        "population": 1308120,
        "capital": "Nicosia",
        "squareKilometers": 9251,
        "religionsRepresented": ["Christianity - Eastern Orthodox", "Islam - Sunni"],
        "languagesRepresented": ["Greek", "Turkish", "English", "Romanian", "Bulgarian"],
        "occupiedBy": "England",
        "yearOfIndependence": 1960
    },
    {
        "countryName": "Turkey",
        "population": 83593483,
        "capital": "Ankara",
        "squareKilometers": 783562,
        "religionsRepresented": ["Islam - Sunni"],
        "languagesRepresented": ["Turkish", "Kurdish"],
        "occupiedBy": "None", 
        "yearOfIndependence": 1923
    },
    {
        "countryName": "Palestine",
        "population": 5227193,
        "capital": "Jerusalem",
        "squareKilometers": 6020,
        "religionsRepresented": ["Islam - Sunni", "Christianity - Orthodox"],
        "languagesRepresented": ["Arabic", "Hebrew"],
        "occupiedBy": ["England", "Israel"],
        "yearOfIndependence": "Currently occupied by Israel since 1948"
    },
    {
        "countryName": "Jordan",
        "population": 11086716,
        "capital": "Amman",
        "squareKilometers": 89342,
        "religionsRepresented": ["Islam - Sunni", "Christianity - Orthodox"],
        "languagesRepresented": ["Arabic", "English"],
        "occupiedBy": "England",
        "yearOfIndependence": 1946
    },
    {
        "countryName": "Lebanon",
        "population": 5331203,
        "capital": "Beirut",
        "squareKilometers": 10400,
        "religionsRepresented": ["Islam - Sunni", "Islam - Shia", "Christian - Maronite", "Druze"],
        "languagesRepresented": ["Arabic", "French", "English", "Armenian"],
        "occupiedBy": "France",
        "yearOfIndependence": 1943
    },
    {
        "countryName": "Syria",
        "population": 22933531,
        "capital": "Damascus",
        "squareKilometers": 187437,
        "religionsRepresented": ["Islam - Sunni", "Christianity - Orthodox", "Druze"],
        "languagesRepresented": ["Arabic", "Kurdish", "Armenian"],
        "occupiedBy": "France",
        "yearOfIndependence": 1946
    }
]