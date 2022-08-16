import _ from 'lodash';
import loadMenu from './print.js';
import loadHome from './home.js';

 function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const btnContact = document.createElement('button');
    const btnHome = document.createElement('button');

  btn.innerHTML = 'Menu';
  btn.onclick = loadMenu;
  btn.classList.add('btn')
  btn.classList.add('btn-primary')

  btnHome.innerHTML = 'Home';
  btnHome.onclick = loadHome;
  btnHome.classList.add('btn')
  btnHome.classList.add('btn-primary')

  btnContact.innerHTML = 'Contact';
//   btn.onclick = ;
  btnContact.classList.add('btn')
  btnContact.classList.add('btn-primary')


  element.appendChild(btn);
  element.appendChild(btnHome);
  element.appendChild(btnContact);

   return element;
 }

 document.body.appendChild(component());