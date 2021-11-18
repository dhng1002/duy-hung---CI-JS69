const url = 'https://60ae0d5e80a61f00173324bc.mockapi.io/products'
const section = document.querySelector('section')
function render(data){
    data.forEach(element => {
        console.log(element)
        if(element.image !== ""){
        let component = document.createElement('div')
        let image = document.createElement('img')
        let title = document.createElement('div')
        image.setAttribute("src" , `${element.image}`)
        title.innerHTML = `<h1>Name: ${element.name}</h1>
                            <p>Error: ${element.errorDescription}</p>
                            <p>SKU: ${element.sku}</p>
                            <p>ID: ${element.id}</p>
                            <p>Color:${element.color == null ? 0 : element.color}</p>`
        component.appendChild(image)
        component.appendChild(title)
        section.appendChild(component)
        }

    });
}


fetch(url).
then(response => response.json())
.then(data => render(data));