const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

                   

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombre => console.log(nombre))
    .catch(err => console.log(err))