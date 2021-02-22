'use strict';
// Seattle
let time= ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let total=0;
const seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  customerAvgCookies: 6.3,
  avgCustomers: [],
  avgCookiesHr: [],
  randomCustomer: function () {
    this.avgCustomers = customers( this.minCustomers, this.maxCustomers );
  },
  render: function () {
    const parentElement = document.getElementById( 'Place' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.name;
    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );
    for( let i=0; i<time.length ; i++ ){
      const liElement=document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent= `${time[i]}: ${Math.floor( this.avgCustomers[i]*this.customerAvgCookies )}`;
      total= total+ Math.floor( this.avgCustomers[i]*this.customerAvgCookies );
    }
    const liElement =document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent=`Total: ${total}`;
  }
};

seattle.randomCustomer();
seattle.render();
// Global Helper Function
function customers( min, max ) {
  let cuArr = [];
  for ( let i = 0; i < 15; i++ ) {
    let cu = Math.floor( Math.random() * ( max - min + 1 ) + min );
    cuArr.push( cu );
  }
  return cuArr;
}
// Tokyo
const Tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  customerAvgCookies: 1.2,
  avgCustomers: [],
  avgCookiesHr: [],
  randomCustomer: function () {
    this.avgCustomers = customers( this.minCustomers, this.maxCustomers );
  },
  render: function () {
    const parentElement = document.getElementById( 'Place' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.name;
    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );
    for( let i=0; i<time.length ; i++ ){
      const liElement=document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent= `${time[i]}: ${Math.floor( this.avgCustomers[i]*this.customerAvgCookies )}`;
      total= total+ Math.floor( this.avgCustomers[i]*this.customerAvgCookies );
    }
    const liElement =document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent=`Total: ${total}`;
  }
};

Tokyo.randomCustomer();
Tokyo.render();

// Dubai
const Dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  customerAvgCookies: 3.7,
  avgCustomers: [],
  avgCookiesHr: [],
  randomCustomer: function () {
    this.avgCustomers = customers( this.minCustomers, this.maxCustomers );
  },
  render: function () {
    const parentElement = document.getElementById( 'Place' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.name;
    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );
    for( let i=0; i<time.length ; i++ ){
      const liElement=document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent= `${time[i]}: ${Math.floor( this.avgCustomers[i]*this.customerAvgCookies )}`;
      total= total+ Math.floor( this.avgCustomers[i]*this.customerAvgCookies );
    }
    const liElement =document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent=`Total: ${total}`;
  }
};

Dubai.randomCustomer();
Dubai.render();

// Paris
const Paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  customerAvgCookies: 2.3,
  avgCustomers: [],
  avgCookiesHr: [],
  randomCustomer: function () {
    this.avgCustomers = customers( this.minCustomers, this.maxCustomers );
  },
  render: function () {
    const parentElement = document.getElementById( 'Place' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.name;
    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );
    for( let i=0; i<time.length ; i++ ){
      const liElement=document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent= `${time[i]}: ${Math.floor( this.avgCustomers[i]*this.customerAvgCookies )}`;
      total= total+ Math.floor( this.avgCustomers[i]*this.customerAvgCookies );
    }
    const liElement =document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent=`Total: ${total}`;
  }
};

Paris.randomCustomer();
Paris.render();

// Lima
const Lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  customerAvgCookies: 4.6,
  avgCustomers: [],
  avgCookiesHr: [],
  randomCustomer: function () {
    this.avgCustomers = customers( this.minCustomers, this.maxCustomers );
  },
  render: function () {
    const parentElement = document.getElementById( 'Place' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.name;
    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );
    for( let i=0; i<time.length ; i++ ){
      const liElement=document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent= `${time[i]}: ${Math.floor( this.avgCustomers[i]*this.customerAvgCookies )}`;
      total= total+ Math.floor( this.avgCustomers[i]*this.customerAvgCookies );
    }
    const liElement =document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent=`Total: ${total}`;
  }
};

Lima.randomCustomer();
Lima.render();