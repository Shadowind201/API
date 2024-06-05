
function Converter(CEP) {
    fetch("https://cep.awesomeapi.com.br/json/" + CEP)
        .then((response) => response.json())
        .then((data) => alert(data.address + " - " + data.district+ " - " + data.state + " - " + data.city + " - " + data.ddd))
        .then((error) => console.log(error))
}

document.getElementById("endereco").addEventListener("click",()=>{
    let CEP = document.getElementById("CEP").value
    Converter(CEP)
})