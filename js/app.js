const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data))

}
const displayCountries = (countries) => {
    // console.log(countries);
    const allCountries = countries.map(country => getCountry(country))
    console.log(allCountries);
    const showCountries = document.getElementById("showCountries")
    showCountries.innerHTML = allCountries.join(" ")
}

const getCountry = ({ name, flags }) => {
    return `
    <div>
      <h2> ${name.common}</h2>
      <img src = " ${flags.png}">
    </div>
    `
}
loadCountries()