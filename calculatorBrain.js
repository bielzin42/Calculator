var result = document.getElementById("result");

var number1, number2, resultado;

function onNumberClicked(numberButton){
    
    if(result.innerHTML == "0"){
        result.innerHTML = parseInt(numberButton.innerHTML);
    }
    else{
        result.innerHTML += numberButton.innerHTML;
    }
}

function onClearClicked(){
    result.innerHTML = 0;
    number2=0, number1=0;
}

function onEqualsClicked()
{    
    if(resultado == "+")
    {
        number2 = parseInt(result.innerHTML);
        result.innerHTML = number1 + number2;
    }


    if(resultado == "-")
    {
        number2 = parseInt(result.innerHTML);
        result.innerHTML = number1 - number2; 
    }

    if(resultado == "*")
    {
        number2 = parseInt(result.innerHTML);
        result.innerHTML = number1 * number2;
    }

    if(resultado == "/")
    {
        number2 = parseInt(result.innerHTML);
        if(number2 != 0)
        {
        result.innerHTML = number1 / number2;
        }
        else {
            result.innerHTML= "Can't divide per 0";
        }
    }
    if(resultado == "seno")
    {
        result.innerHTML = Math.sin(number1);
    }
    if(resultado == "cosseno")
    {
        result.innerHTML = Math.cos(number1);
    }
    if (resultado == "raiz")
    {
        result.innerHTML = Math.sqrt(number1);
    }
    if(resultado == "fatorial")
    {
        if(number1 === 0 || number1 === 1)
        {
            result.innerHTML = 1;
        }
        if(number1 >= 1)
        {
            for(var i = number1 -1; i >= 1; i--)
            {
                number1 = (number1 * i);
            }
            result.innerHTML = number1;
        }      
        
    }
}

function onDivideClicked(){
    number1 = parseInt(result.innerHTML);
    resultado = "/"
    result.innerHTML = "0"; 
}



function onAddClicked()
{
    number1 = parseInt(result.innerHTML);
    resultado = "+"
    result.innerHTML = "0";  
    
}

function onSubtractClicked()
{
    number1 = parseInt(result.innerHTML);
    resultado = "-";
    result.innerHTML = "0";
}

function onMultiplyCliked()
{
    number1 = parseInt(result.innerHTML);
    resultado = "*";
    result.innerHTML = "0";  
}

function onSenoClicked()
{
    number1 = parseInt(result.innerHTML);
    resultado = "seno";
    result.innerHTML = `Seno(${number1})`;
}

function onCossenoClicked()
{
    number1 = parseInt(result.innerHTML);
    resultado = "cosseno";
    result.innerHTML = `Cosseno(${number1})`;
}

function onSquareRootClicked() 
{
    number1 = parseInt(result.innerHTML);
    resultado = "raiz";
    result.innerHTML = `√(${number1})`
}

function onFatorialClicked()
{
    number1 = parseInt(result.innerHTML);
    resultado = "fatorial";
    result.innerHTML = `Fatorial(${number1})`;
}