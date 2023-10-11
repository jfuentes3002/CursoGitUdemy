var pelicula = "Harry Potter y el Prisionero de Azkaban";
var serie = '24';
var poema = "\nLorem ipsum dolor si amet, consectetur adipiscing incidunt ut labore et dolore magna aliquam erat nostrud exercitation ullamcorper suscipit laboris nis duis autem vel eum irure dolor in reprehenderit i dolore eu fugiat nulla pariatur. At vero eos et accus praesant luptatum delenit aigue duos dolor et mol provident, simil tempor sunt in culpa qui officia de fuga. Et harumd dereud facilis est er expedit disti eligend oprio congue nihil impedit doming id quod assumenda est, omnis dolor repellend.\n";
// operaciones
var programas = "Mis programas favoritos son: " + pelicula + " y " + serie;
console.log(programas);
// template string
var programas2 = "\nMis programas favoritos son: ".concat(pelicula, " y ").concat(serie, "\n");
console.log(programas2);
var edad_actual = 46;
var edad_futura = "\nEl siguiente mes mi edad sera ".concat(edad_actual + 1, "\n");
console.log(edad_futura);
// metodos
console.log(programas.charAt(0));
console.log(programas.toUpperCase());
