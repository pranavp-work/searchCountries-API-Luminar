const searchAction = async () => {
    // Fetch the country data from the API
    let country = await fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`);
    
    country.json().then((data) => {
        let countryDetails = data[0];
        console.log(countryDetails);

        // Extract common and official names
        let nameCommon = countryDetails.name.common;
        let nameOfficial = countryDetails.name.official;

        console.log(nameCommon);
        console.log(nameOfficial);

        // Extract currency name and symbol
        let currencyName = '';
        let currencySymbol = '';
        for (var item in countryDetails.currencies) {
            currencyName = countryDetails.currencies[item].name;
            currencySymbol = countryDetails.currencies[item].symbol;
        }
        console.log(currencyName, currencySymbol);

        // Extract the capital
        let countryCapital = countryDetails.capital ? countryDetails.capital[0] : 'N/A';
        console.log(countryCapital);

        // Extract languages
        let nationLanguages = [];
        for (var item in countryDetails.languages) {
            nationLanguages.push(countryDetails.languages[item]);
        }
        console.log(nationLanguages);

        // Extract borders
        let borders = countryDetails.borders ? countryDetails.borders.join(", ") : 'None';
        console.log(borders);

        // Extract area
        let area = countryDetails.area;
        console.log(area);

        // Extract Google Maps URL
        let googleMapsUrl = countryDetails.maps.googleMaps;
        console.log(googleMapsUrl);

        // Extract population
        let population = countryDetails.population;
        console.log(population);

        // Extract timezones
        let timezones = countryDetails.timezones.join(", ");
        console.log(timezones);

        // Extract continent
        let continent = countryDetails.continents[0];
        console.log(continent);

        // Extract flag image
        let flagImage = countryDetails.flags.png;
        console.log(flagImage);

        // Update the result HTML to display the fetched data
        result.innerHTML = `
            <div class="card" id="result" style="width: 25rem;">
                <img class="card-img-top" id="countryFlag" src="${flagImage}" alt="Country Flag" style="height: 150px; object-fit: cover; border-radius: 15px 15px 0 0;">
                <h5 class="card-title d-flex justify-content-center">${nameCommon}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Official Name: </strong>${nameOfficial}</li>
                    <li class="list-group-item"><strong>Currency: </strong>${currencyName} (${currencySymbol})</li>
                    <li class="list-group-item"><strong>Capital: </strong>${countryCapital}</li>
                    <li class="list-group-item"><strong>Languages: </strong>${nationLanguages.join(", ")}</li>
                    <li class="list-group-item"><strong>Borders: </strong>${borders}</li>
                    <li class="list-group-item"><strong>Area: </strong>${area} km²</li>
                    <li class="list-group-item"><strong>Population: </strong>${population}</li>
                    <li class="list-group-item"><strong>Timezones: </strong>${timezones}</li>
                    <li class="list-group-item"><strong>Continent: </strong>${continent}</li>
                </ul>
                <div class="card-body">
                    <a href="${googleMapsUrl}" target="_blank" class="card-link d-flex justify-content-center">View on Google Maps</a>
                </div>
            </div>`;
    });
}