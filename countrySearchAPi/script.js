let getCountries = async (countryName) => {
    let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    let data = await response.json();
    return data;
}

getCountries('India').then(data => console.log(data)).catch(err => console.error(err));
