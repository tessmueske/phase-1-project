document.addEventListener("DOMContentLoaded", () => {
    fetchContent();
});

function fetchContent(){
    fetch("http://localhost:3000/countries")
    .then(res => res.json())
    .then(data => {
        const jsonContainer = document.getElementById('json-here');

        data.forEach(country => {
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('card');
            const countryName = document.createElement('h2');
            const population = document.createElement('p');
            const capital = document.createElement('p');
            const squareKilometers = document.createElement('p');
            const religionsRepresented = document.createElement('p');
            const languagesRepresented = document.createElement('p');
            const occupiedBy = document.createElement('p');
            const yearOfIndependence = document.createElement('p');

            countryName.textContent = `Country Name: ${country.name}`;
            population.textContent = `Population: ${country.population}`;
            capital.textContent = `Capital: ${country.capital}`;
            squareKilometers.textContent = `Square Kilometers: ${country.squareKilometers}`;
            religionsRepresented.textContent = `Religions Represented: ${country.religionsRepresented.join(', ')}`;
            languagesRepresented.textContent = `Languages Represented: ${country.languagesRepresented.join(', ')}`;
            occupiedBy.textContent = `Occupied By: ${country.occupiedBy}`;
            yearOfIndependence.textContent = `Year Of Independence: ${country.yearOfIndependence}`;

            countryDiv.appendChild(countryName);
            countryDiv.appendChild(population);
            countryDiv.appendChild(capital);
            countryDiv.appendChild(squareKilometers);
            countryDiv.appendChild(religionsRepresented);
            countryDiv.appendChild(languagesRepresented);
            countryDiv.appendChild(occupiedBy);
            countryDiv.appendChild(yearOfIndependence);

            jsonContainer.appendChild(countryDiv);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function createCountryCards() {
const countries = [/* your JSON data */];

const container = document.getElementById('container'); // Assuming you have a container element in your HTML where you want to render the cards

countries.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${country.name}</h2>
        <p>Population: ${country.population}</p>
        <p>Capital: ${country.capital}</p>
        <p>Square Kilometers: ${country.squareKilometers}</p>
        <p>Religions Represented: ${country.religionsRepresented.join(', ')}</p>
        <p>Languages Represented: ${country.languagesRepresented.join(', ')}</p>
        <p>Occupied By: ${country.occupiedBy}</p>
        <p>Year of Independence: ${country.yearOfIndependence}</p>
    `;
    container.appendChild(card);
});
}