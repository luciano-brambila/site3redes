function myFunction()
{
    alert("Isso é um alerta");
    document.getElementById("firstText").innerHTML = "Acabei <u>de mudar</u> o <br><i>texto</i>";
}

function turnRed()
{
    //document.write("eii");
    document.getElementById("mydiv").style.backgroundColor = "red";

    //div.style.backgroundColor = "red";
}

function turnBlue()
{
    let div = document.getElementById("mydiv");
    div.style.backgroundColor = "blue";
}

function backYellow()
{
    document.body.style.backgroundColor = "yellow";
}

function backWhite()
{
    document.body.style.backgroundColor = "white";
}