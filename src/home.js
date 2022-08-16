export default function loadHome(){
   const content =  document.getElementById('content')
   content.innerHTML = ''

   let div = document.createElement('div')
    content.appendChild(div)
    div.classList.add('items')

    let title = document.createElement('h1')
    div.appendChild(title)
    title.innerHTML += 'Green Grown Grass'

    let descrip = document.createElement('h4')
    div.appendChild(descrip)
    descrip.innerHTML += 'Grass grown locally for you and your farm animals!'
}