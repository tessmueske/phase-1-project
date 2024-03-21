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
            const countryName = document.createElement('header');
            const population = document.createElement('p');
            const capital = document.createElement('p');
            const squareKilometers = document.createElement('p');
            const religionsRepresented = document.createElement('p');
            const languagesRepresented = document.createElement('p');
            const occupiedBy = document.createElement('p');
            const yearOfIndependence = document.createElement('p');

            countryName.textContent = `Country Name: ${country.name}`;
                countryName.style.textDecoration = 'underline';
                countryName.style.fontFamily = 'Fuzzy Bubbles, cursive';
                countryName.style.fontSize = '36px';
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