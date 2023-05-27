let precioBolsa=12000;
let cantidadBolsa=21;
let comeXdia=0.4;

  plata.oninput = function() {
    variable.innerHTML ="Comida para  " + Math.round(((plata.value*cantidadBolsa)/precioBolsa)/comeXdia) + " dias";
  };