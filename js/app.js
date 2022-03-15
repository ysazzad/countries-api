const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data))

}
const displayCountries = (countries) => {
    // console.log(countries);
    const allCountries = countries.map(country => getCountry(country))
    // console.log(allCountries);
    const showCountries = document.getElementById("showCountries")
    showCountries.innerHTML = allCountries.join(" ")
}

const getCountry = ({ name, flags }) => {
    return `
    <div class= "country">
      <h2> ${name.common}</h2>
      <img src = " ${flags.png}"> <br><br>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning" onclick ="singleCountry('${name.common}')"> Explore</button>
    </div>
    `
}
const singleCountry = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => displaySingleCountry(data[0]))

}
const displaySingleCountry = ({ name, area, capital, continents, flags, languages, population, region }) => {
    // console.log(country);
    const modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = `
    
    <img src = " ${flags.png}">
    
    <p> name : ${name.common}</p>
    <p> capital : ${capital}</p>
    <p> area : ${area}</p>
    <p> population : ${population}</p>
    <p> region : ${region}</p>
    <p> continents : ${continents}</p>
    <p> languages : ${Object.values(languages)}</p>
    `
}
loadCountries()