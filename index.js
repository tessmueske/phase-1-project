const emptyHeart = '♡';
const fullHeart = '♥';

document.addEventListener("DOMContentLoaded", () => {
    fetchDataAndRender();
});

function fetchDataAndRender() {
    fetch("http://localhost:3000/countries")
        .then(res => res.json())
        .then(data => {
            renderData(data);
            setupFilters(data);
        })
        .catch(error => console.error('Error fetching JSON!', error));
}

function renderData(data) {
    const jsonContainer = document.getElementById('json-here');
    jsonContainer.innerHTML = ''; 
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
        const heartIcon = document.createElement('i');

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
        heartIcon.classList.add('like-glyph');
        heartIcon.innerHTML = emptyHeart;

        heartIcon.addEventListener('click', () => {
            if (heartIcon.innerHTML === emptyHeart) {
                heartIcon.innerHTML = fullHeart;
                heartIcon.style.color = 'red'; 
            } else {
                heartIcon.innerHTML = emptyHeart;
                heartIcon.style.color = 'black'; 
            } 
        });

        countryDiv.appendChild(countryName);
        countryDiv.appendChild(population);
        countryDiv.appendChild(capital);
        countryDiv.appendChild(squareKilometers);
        countryDiv.appendChild(religionsRepresented);
        countryDiv.appendChild(languagesRepresented);
        countryDiv.appendChild(occupiedBy);
        countryDiv.appendChild(yearOfIndependence);
        countryDiv.appendChild(heartIcon);

        jsonContainer.appendChild(countryDiv);
    });
}

function setupFilters(data) {
    document.getElementById('countries-filter').addEventListener('change', function(event) {
        const criteria = event.target.value;
        let filteredData = [];
    
        if (criteria === 'population') {
            filteredData = data.filter(country => parseInt(country.population.replace(/,/g, '')) < 10000000);
        } else if (criteria === 'independence') {
            filteredData = data.filter(country => country.yearOfIndependence === 1956);
        } else if (criteria === 'language') {
            filteredData = data.filter(country => country.languagesRepresented.includes('French'));
        } else if (criteria === 'all') {
            renderData(data);
            return; 
        }
    
        renderData(filteredData.length > 0 ? filteredData : data);
    });
}