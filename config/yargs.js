const { describe } = require("yargs");

const argv = require("yargs")
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: "Es la base de la tabla de multiplicar"
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: 'false',
                    demandOption: true,
                    describe: "Muestra la tabla en la consola"
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: "¿Hasta qué número quieres que se muestre la tabla?"
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw "La base tiene que ser un numero"
                    }
                    return true;
                })
                .argv;

module.exports = argv;