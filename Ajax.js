let xhttp = new XMLHttpRequest();

// Define una función a llamar cuando la propiedad readyState cambia
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    let myObj = JSON.parse(this.responseText);
    console.log(myObj.ok);
  }
};

// Especifica la petición (tipo, url y asincronismo)
xhttp.open("GET", "http://192.168.1.98:8085/coins", true);

// Envía la petición al servidor
xhttp.send();

