const emptyHeart = '♡';
const fullHeart = '♥';

document.addEventListener("DOMContentLoaded", () => {
    fetchContent();
});

const header = document.getElementsByClassName('header')[0]
header.style.fontFamily = 'Fuzzy Bubbles, cursive';

function fetchContent() {
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
        })
        .catch(error => console.error('Error fetching JSON!', error));
}




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}