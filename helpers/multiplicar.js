const fs = require("fs");
const colors = require("colors");




const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base}x${i} x ${base * i}\n`;
        }
        if (listar === true) {
            console.clear();
            console.log("=====================".green);
            console.log("Tabla del:".green, colors.blue(base));
            console.log("=====================".green);

            console.log(colors.rainbow(salida));
        }
        //Si no le ponemos ningun path toma el directorio de la carpeta donde se ejecuta el archivo node (app.js)

        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    } catch (err) {
        throw err;
    }


    console.log(`tabla-${base}.txt creado`);


};

module.exports = {
    crearArchivo: crearArchivo
}