
fetch("https://api.nasa.gov/planetary/apod?api_key=API-KEY")

.then(response => {return response.json() })
.then(data => {
     console.log(data)

     let title = data.title
     let image = data.url
     let description = data.explanation
     let date = data.date
     let copyr = data.copyright

     titulo.textContent = `${title}`
     fecha.textContent = `${date}`
     descripcion.textContent = `${description}`
     copy.textContent = `${copyr}`

     const tarjeta =`<div class="pt-3 text-center">
     <img src="${image}" class="img-fluid" alt="image"/></div>`

     document.getElementById('theimage').innerHTML += tarjeta
})
.catch(err => console.error(err));
