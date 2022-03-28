/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const url="https://platzi-avo.vercel.app/api/avo";
const urlbase='https://platzi-avo.vercel.app/'

const formatPrice=(price)=>{
   const newPrice= new window.Intl.NumberFormat('en-EN',{
        style:"currency",
        currency:'GBP',
    }).format(price);
    return newPrice;
}
let allItem=[];
window.fetch(url)
.then(respose=>respose.json())
.then(data=>{
data.data.forEach(element => {
    const container= document.createElement('div')
    container.className='container-avocado'

    const image=document.createElement('img');
    image.src=`${urlbase}${element.image}`
    image.className="image-avocado"

    const name=document.createElement('h3');
    name.textContent=element.name;
    name.className='text-avocado'

    const  price=document.createElement('p')
    price.textContent=formatPrice(element.price);
    price.className='price-avocado'

    container.append(image, name,price)
    allItem.push(container);
    console.log(allItem);
});   
console.log("Esto es lo que imprime:",allItem);
const main=document.querySelector('#app');
main.append(...allItem)
})

