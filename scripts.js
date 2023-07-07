const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-value")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvert = document.querySelector(".currency-value")

    const euroToday = 6.0;
    const dolarToday = 5.0;


    if (currencySelect.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US" , 
        {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }


    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", 
    {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);


}


convertButton.addEventListener("click", convertValues)


