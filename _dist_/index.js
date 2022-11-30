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
        title.classList.add('font-semibold', 'underline','decorate-sky-500', 'tracking-wide', 'text-xl', 'm-2', 'text-indigo-600','h-1/%')
        title.textContent = item.name;
        // crear precio
        const price = document.createElement('div');
        price.classList.add('text-gray-500',)
        price.textContent = `$${item.price} kg`;
        // inserto contenedor del texto
        const textContainer = document.createElement('div');
        textContainer.classList.add('h-1/3','flex','justify-center', 'flex-col')
        textContainer.append(title, price)
        //crear imagen
        const image = document.createElement('img');
        image.classList.add('w-100', 'h-2/3',)
        image.src = `${baseAPI}${item.image}`

        // creamos contenedor de todos los elementos
        const divContainer = document.createElement('div');
        divContainer.classList.add('w-64','h-80','border-2','-z-10','border-gray-200', 'rounded-md','flex','flex-col','justify-end', 'cursor-pointer' ,'transform','delay-150','hover:translate-y-150','hover:scale-110','duration-300','bg-white','hover:z-40','hover:border-gray-600','my-1', 'max-w-full','min-w-5')

        // 'transition','delay-150','hover:-translate-y-4','hover:scale-150','duration-300'

        // ingresamos todo los elementos en un contenedor
        divContainer.append(textContainer, image);
        // insertamos los datos en el body 
        document.body.appendChild(divContainer);

        // ingresamos todos los datos para insertar 1 unico array con todos los elementos
        itemsArray.push(divContainer);

    });
    app.append(...itemsArray); //usamos el spread operator para solo insertar el valor del array y no el array en si
})()

