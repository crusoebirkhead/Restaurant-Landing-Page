export default function loadMenu() {
   const content =  document.getElementById('content')
   content.innerHTML = ''
    let div = document.createElement('div')
    content.appendChild(div)
    div.classList.add('items')

    for (let i = 0; i < 4; i++){
        let parent = document.createElement('div')
        let title = document.createElement('h2')
        let descrip = document.createElement('h4')
        div.appendChild(parent)
        parent.appendChild(title)
        parent.appendChild(descrip)
        title.innerHTML += 'Lorem ipsum'
        descrip.innerHTML += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit massa. Mattis pellentesque id nibh tortor id aliquet.'

    }
  }