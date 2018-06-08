let usuario = {
  usuario: "Alex",
  activado: "true",
  tokenRegistro:"12345",
  baneado: "false",
  fechaNacimiento: new Date("1985-03-2"),
  email: "ortizdiazalex@gmail.com",
  prefijo: "+34",
  telefono:"665860628",
  tipo: "admin",
  dni: "53370788R",
  referalId:"Ramiro",
  _id:"",
  foto: "",
  loginIp:"",
  fechaUltimoLogin: new Date(),
  ventas:[],
  compras:[],
  recibidos:[],
  enviados:[],
  fondos:[],
  realcash:1000

}

let monedaBTC = {
  id : "",
  symbol :"BTC",
  historico :[{
    precioUltimo:1.200,
    precioApertura:0.995,
    precioCierre:0.700,
    fechaUltimaActualizacion:new Date(),
    volumen:234444444,
    precioMedio:1.45
  }],
  conversion : "USDT",

  mediasMoviles:[],
  osciladores:[]


}

let moneda2 = {
  id :"",
  symbol: "WTCBTC",
  historico :[{
    precioUltimo:1.00,
    precioApertura:0.755,
    precioCierre:0.982,
    fechaUltimaActualizacion:new Date(),
    volumen:934444444,
    precioMedio:1.75
  }],
  conversion: "BTC",
  mediasMoviles:[],
  osciladores:[]

}

function ingresarDolares(usuario,dolares)
{

  if("realcash" in usuario){
    usuario.realcash+=dolares;
  }
  else{
    usuario.realcash=dolares;}
  
}

//2 Funcion para ingresar fondos
function ingresarFondos(usuario,monedaBTC,cantidadBTC){
  let len=monedaBTC.historico.length;
  let precioBTC = monedaBTC.historico[len-1].precioUltimo;
  let total = precioBTC * cantidadBTC;

  if(usuario.realcash<total){
  return false;
  }
 
  usuario.realcash-=total;
  usuario.fondos.BTC =("BTC" in usuario.fondos)? usuario.fondos.BTC + cantidadBTC : cantidadBTC;
  return true;
}

//3 Retirar fondos
function retirarFondos(usuario,monedaBTC,ventaBTC){

  if (usuario.fondos.BTC<venta BTC){return false;}
  let len = monedaBTC.historico.length;
  let precioBTC = monedaBTC.historico[len-1].precioUltimo;
  let total = precioBTC * ventaBTC;

  usuario.realcash+=total;
  usuario.fondos.BTC =("BTC" in usuario.fondos)? usuario.fondos.BTC - ventaBTC : ;
  
  
}

//5 Funcion Precio Ultimo Moneda

function obtenerPrecioUltimoMoneda(monedas,symbolMoneda){
  let lenMonedas = monedas.length;
  for (let i=0; i<len; i++){
    if (monedas[i].symbol === symbolMoneda){
      let lenMoneda =monedas[i].historico.length;
      return monedas [i].historico[len-1].precioUltimo;
    
    }
  }
  return undefined;
}










}
