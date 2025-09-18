document.getElementById("submitBtn").addEventListener("click", function() {
    let cName = document.getElementById("country").value;

    fetch(`https://restcountries.com/v3.1/name/${cName}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("flag").src = data[0].flags.png;
        document.getElementById("countryName").innerHTML = cName;
        document.getElementById("capital").innerHTML = data[0].capital[0];
        document.getElementById("continents").innerHTML = data[0].continents[0];
        document.getElementById("borders").innerHTML = data[0].borders[0];
    })

})