var d = document;

function nuevoEncabezado(){
    var cabeza = d.getElementById("cabeza");
    cabeza.src = d.getElementById("archivoEncabezado").value;
    archivoEncabezado.value="";
}

function nuevaCategoria(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    var catFondo = d.getElementById("catFondo");
    coso.style = "font-size: 18px;font-weight: 500;background-color:" + catFondo.value + ";color: white;line-height: 40px;text-transform: uppercase;padding: 10px 25px 10px 10px;display: inline;";
    var textito = d.getElementById("catTitulo");
    var node = document.createTextNode(catTitulo.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    catTitulo.value="";
    catFondo.value="";
}

function nuevoTitulo(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    var tituloColor = d.getElementById("tituloColor");
    coso.style = "font-size: 45px;font-weight: 800;padding-bottom: 8px;padding-top: 20px;color:" + tituloColor.value + ";";
    var textito = d.getElementById("titulo");
    var node = document.createTextNode(titulo.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    tituloColor.value = "";
    titulo.value = "";
    
}

function nuevoTitulito(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    coso.style = "font-family: Roboto, Helvetica, Arial, sans-serif;padding-bottom: 15px;color: gray;text-align: left;line-height: 20px;font-size: 20px;font-weight: 300;margin: 0.5em 0px;text-transform: uppercase;";
    var textito = d.getElementById("titulito");
    var node = document.createTextNode(titulito.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    titulito.value = "";
}

function nuevoParrafo(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    coso.style = "font-size: 18px;";
    var textito = d.getElementById("parrafo");
    var node = document.createTextNode(parrafo.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    parrafo.value = "";
}


function nuevoItem(){
    var lista = d.getElementById("listaDeLista");
    var listitim = d.createElement("li");
    var textin = d.createElement("textarea");
    textin.style = "font-size: 18px;";
    lista.appendChild(listitim);
    listitim.appendChild(textin);
}


function nuevaLista(){
    var cosote = d.createElement("tr");
    var cosotin = d.createElement("td");
    var cosoUL = d.createElement("ul");
    
    var element = d.getElementById("ACA");
    element.appendChild(cosote);
    
    var cositosLista = [];
    cositosLista = d.getElementsByClassName("itemLista");
    
    
    var i = 0;
    do{ 
        var coso = d.createElement("li");
        /*coso.style = "listita";*/
        var node = document.createTextNode(cositosLista[i].value)
        coso.appendChild(node);
        cosoUL.appendChild(coso);    
        i++;
    }while (i < cositosLista.length);
    
    cosotin.appendChild(cosoUL);
    cosote.appendChild(cosotin);
    
    
    var x = 0;
    do{ 
        cositosLista[x].value = "";
        x++;
    }while (x < cositosLista.length);
    
}


function NuevaImagen(){
    var cosote = d.createElement("tr");
    var cosotin = d.createElement("td");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("img");
    var node = document.createTextNode(archivoImagen.value);
    var textito = d.getElementById("archivoImagen");
    coso.src = textito.value;
    coso.style = "width: 100%;margin-top: 25px;";
    
    coso.appendChild(node);
    cosotin.appendChild(coso);
    cosote.appendChild(cosotin);
    
    archivoImagen.value = "";
}

function NuevoPie(){
    var cosote = d.createElement("tr");
    var element = document.getElementById("ACA");
    element.appendChild(cosote);
    var coso = document.createElement("td");
    coso.style = "font-family: Roboto, Helvetica, Arial, sans-serif;color: gray;text-align: right;line-height: 18px;font-size: 20px;font-weight: 300;margin: 0.5em 0px;text-transform: uppercase;padding-bottom: 15px;";
    var textito = d.getElementById("pie");
    var node = document.createTextNode(pie.value);
    coso.appendChild(node);
    cosote.appendChild(coso);
    
    pie.value = "";
}