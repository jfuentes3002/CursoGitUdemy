let pelicula: string = "Harry Potter y el Prisionero de Azkaban";
let serie: string = '24'
let poema: string = `
Lorem ipsum dolor si amet, consectetur adipiscing incidunt ut labore et dolore magna aliquam erat nostrud exercitation ullamcorper suscipit laboris nis duis autem vel eum irure dolor in reprehenderit i dolore eu fugiat nulla pariatur. At vero eos et accus praesant luptatum delenit aigue duos dolor et mol provident, simil tempor sunt in culpa qui officia de fuga. Et harumd dereud facilis est er expedit disti eligend oprio congue nihil impedit doming id quod assumenda est, omnis dolor repellend.
`

// operaciones
let programas: string = "Mis programas favoritos son: " + pelicula + " y " + serie;
console.log(programas);

// template string
let programas2: string = `
Mis programas favoritos son: ${pelicula} y ${serie}
`
console.log(programas2);

let edad_actual: number = 46;
let edad_futura: string = `
El siguiente mes mi edad sera ${edad_actual + 1}
`
console.log(edad_futura);

// metodos
console.log(programas.charAt(0));
console.log(programas.toUpperCase());
