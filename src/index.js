/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const API = 'https://platzi-avo.vercel.app/api/avo';


//usando async/await para hacer el llamdo al API y convertir en json
const fetchData = async () => {
    const call = await fetch(API);
    const callJson = await call.json();
    return callJson;
}

(async () => {
    const datos = await fetchData();
    // creamos una array para meter todos los elemento y asi no insertar uno por uno si no una cadena de arrays
    console.log(datos);
    const itemsArray = [];
    datos.data.forEach(item => {
        // crear titulo
        const title = document.createElement('h2');
        // crear precio
        const price = document.createElement('div');
        //crear imagen
        const image = document.createElement('img');
        // creamos contenedor de todos los elementos
        const divContainer = document.createElement('div');
        // ingresamos todo los elementos en un contenedor
        divContainer.append(title, price, image);
        // insertamos los datos en el body 
        document.body.appendChild(divContainer);
        // ingresamos todos los datos para insertar 1 unico array con todos los elementos
        itemsArray.push(divContainer);
    });
    document.body.append(itemsArray);
})()

