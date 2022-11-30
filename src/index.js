/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseAPI = 'https://platzi-avo.vercel.app';
const app = document.getElementById('app');


//usando async/await para hacer el llamdo al API y convertir en json
const fetchData = async () => {
    const call = await fetch(`${baseAPI}/api/avo`);
    const callJson = await call.json();
    return callJson;
}

(async () => {
    const datos = await fetchData();
    // creamos una array para meter todos los elemento y asi no insertar uno por uno si no una cadena de arrays
    console.log(datos);
    const itemsArray = [];
    datos.data.forEach(item => {
        // crear titulo y asignar texto
        const title = document.createElement('h2');
        title.classList.add('font-semibold', 'underline','decorate-sky-500', 'tracking-wide', 'text-xl', 'm-2', 'text-indigo-600')
        title.textContent = item.name;
        // crear precio
        const price = document.createElement('div');
        price.classList.add('text-gray-900',)
        price.textContent = `$${item.price} dlls x kg`;
        //crear imagen
        const image = document.createElement('img');
        image.src = `${baseAPI}${item.image}`

        // creamos contenedor de todos los elementos
        const divContainer = document.createElement('div');
        divContainer.classList.add('border-2', 'border-gray-200', 'rounded-md')
        // ingresamos todo los elementos en un contenedor
        divContainer.append(title, price, image);
        // insertamos los datos en el body 
        document.body.appendChild(divContainer);

        // ingresamos todos los datos para insertar 1 unico array con todos los elementos
        itemsArray.push(divContainer);

    });
    app.append(...itemsArray); //usamos el spread operator para solo insertar el valor del array y no el array en si
})()

