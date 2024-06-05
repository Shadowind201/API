fetch("https://economia.awesomeapi.com.br/json/last/:moedas")
.then((response) => response.json())
.then((data) => console.log(data.USDBRL.high))
.catch((error) => console.log(error));
