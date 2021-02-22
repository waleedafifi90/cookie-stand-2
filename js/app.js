'use strict';
let oclock= ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
const Seattle = {   
    minCustomers :23,
    maxCustomers :65,
    avgCookies :6.3,
    cookies:[],
     generateRandomNumber:function() {
     this.cookies.push(getRandomNumber(this.minCustomers,this.maxCustomers)* this.avgCookies);
       },
       render:function() {
    const parentElement = document.getElementById('Market');
    const articleElement =document.createElement ('article');
    parentElement.appendChild (articleElement);
    const h2Element =document.createElement ('h2');
    articleElement.appendChild (h2Element);
    h2Element.textContent ='Seattle';
    const ulElement =document.createElement('ul');
    articleElement.appendChild(ulElement);
     for (let i = 0; i < oclock.length; i++) {
         const liElement =document.createElement('li');
         ulElement.appendChild(liElement);
         liElement.textContent =`${oclock[i]} : ${this.cookies[i]}`;
     }
     console.log(Seattle);
    }
    }
    Seattle.render();