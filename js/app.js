// 
// 
'use strict';
// Seattle
let workingHours= ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let total=0;
const seattle = {
  cityName: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesSoldPerCustomer: 6.3,
  customersPerHour: [],
  cookiesSoldPerHour: [],
//   totalCookiesSold: 0,
  randomCustomer: function () {
    this.customersPerHour = customers( this.minHourlyCustomers, this.maxHourlyCustomers );
  },
  render: function () {
    const parentElement = document.getElementById( 'City' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent = this.cityName;
    const unOrderList = document.createElement( 'ul' );
    parentElement.appendChild( unOrderList );
    for( let i=0; i<14 ; i++ ){
      const liElement=document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent= `${workingHours[i]}: ${Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer )}`;
      total= total+ Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer );
    }
    const liElement =document.createElement( 'li' );
    unOrderList.appendChild( liElement );
    liElement.textContent=`Total: ${total}`;
    // for(let i = 0; i < this.likes.length; i++) {
    //     const liElement = document.createElement('li');
    //     ulElement.appendChild(liElement);
    //     liElement.textContent = this.likes[i];
    //   }
  }
};
//Invoke
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
//Tokyo
const Tokyo = {
    cityName: 'Tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesSoldPerCustomer: 1.2,
    customersPerHour: [],
    cookiesSoldPerHour: [],
  //   totalCookiesSold: 0,
    randomCustomer: function () {
      this.customersPerHour = customers( this.minHourlyCustomers, this.maxHourlyCustomers );
    },
    render: function () {
      const parentElement = document.getElementById( 'City' );
      const h2Element = document.createElement( 'h2' );
      parentElement.appendChild( h2Element );
      h2Element.textContent = this.cityName;
      const unOrderList = document.createElement( 'ul' );
      parentElement.appendChild( unOrderList );
      for( let i=0; i<14 ; i++ ){
        const liElement=document.createElement( 'li' );
        unOrderList.appendChild( liElement );
        liElement.textContent= `${workingHours[i]}: ${Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer )}`;
        total= total+ Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer );
      }
      const liElement =document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent=`Total: ${total}`;
      // for(let i = 0; i < this.likes.length; i++) {
      //     const liElement = document.createElement('li');
      //     ulElement.appendChild(liElement);
      //     liElement.textContent = this.likes[i];
      //   }
    }
  };
  //Invoke
  Tokyo.randomCustomer();
  Tokyo.render();
  // Global Helper Function
  function customers( min, max ) {
    let cuArr = [];
    for ( let i = 0; i < 15; i++ ) {
      let cu = Math.floor( Math.random() * ( max - min + 1 ) + min );
      cuArr.push( cu );
    }
    return cuArr;
  }

  //Dubai
  const Dubai = {
    cityName: 'Dubai',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesSoldPerCustomer: 3.7,
    customersPerHour: [],
    cookiesSoldPerHour: [],
  //   totalCookiesSold: 0,
    randomCustomer: function () {
      this.customersPerHour = customers( this.minHourlyCustomers, this.maxHourlyCustomers );
    },
    render: function () {
      const parentElement = document.getElementById( 'City' );
      const h2Element = document.createElement( 'h2' );
      parentElement.appendChild( h2Element );
      h2Element.textContent = this.cityName;
      const unOrderList = document.createElement( 'ul' );
      parentElement.appendChild( unOrderList );
      for( let i=0; i<14 ; i++ ){
        const liElement=document.createElement( 'li' );
        unOrderList.appendChild( liElement );
        liElement.textContent= `${workingHours[i]}: ${Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer )}`;
        total= total+ Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer );
      }
      const liElement =document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent=`Total: ${total}`;
      // for(let i = 0; i < this.likes.length; i++) {
      //     const liElement = document.createElement('li');
      //     ulElement.appendChild(liElement);
      //     liElement.textContent = this.likes[i];
      //   }
    }
  };
  //Invoke
  Dubai.randomCustomer();
  Dubai.render();
  // Global Helper Function
  function customers( min, max ) {
    let cuArr = [];
    for ( let i = 0; i < 15; i++ ) {
      let cu = Math.floor( Math.random() * ( max - min + 1 ) + min );
      cuArr.push( cu );
    }
    return cuArr;
  }
  //Paris
  const Paris = {
    cityName: 'Paris',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesSoldPerCustomer: 2.3,
    customersPerHour: [],
    cookiesSoldPerHour: [],
  //   totalCookiesSold: 0,
    randomCustomer: function () {
      this.customersPerHour = customers( this.minHourlyCustomers, this.maxHourlyCustomers );
    },
    render: function () {
      const parentElement = document.getElementById( 'City' );
      const h2Element = document.createElement( 'h2' );
      parentElement.appendChild( h2Element );
      h2Element.textContent = this.cityName;
      const unOrderList = document.createElement( 'ul' );
      parentElement.appendChild( unOrderList );
      for( let i=0; i<14 ; i++ ){
        const liElement=document.createElement( 'li' );
        unOrderList.appendChild( liElement );
        liElement.textContent= `${workingHours[i]}: ${Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer )}`;
        total= total+ Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer );
      }
      const liElement =document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent=`Total: ${total}`;
      // for(let i = 0; i < this.likes.length; i++) {
      //     const liElement = document.createElement('li');
      //     ulElement.appendChild(liElement);
      //     liElement.textContent = this.likes[i];
      //   }
    }
  };
  //Invoke
  Paris.randomCustomer();
  Paris.render();
  // Global Helper Function
  function customers( min, max ) {
    let cuArr = [];
    for ( let i = 0; i < 15; i++ ) {
      let cu = Math.floor( Math.random() * ( max - min + 1 ) + min );
      cuArr.push( cu );
    }
    return cuArr;
  }
  //Lima
  const Lima = {
    cityName: 'Lima',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesSoldPerCustomer: 4.6,
    customersPerHour: [],
    cookiesSoldPerHour: [],
  //   totalCookiesSold: 0,
    randomCustomer: function () {
      this.customersPerHour = customers( this.minHourlyCustomers, this.maxHourlyCustomers );
    },
    render: function () {
      const parentElement = document.getElementById( 'City' );
      const h2Element = document.createElement( 'h2' );
      parentElement.appendChild( h2Element );
      h2Element.textContent = this.cityName;
      const unOrderList = document.createElement( 'ul' );
      parentElement.appendChild( unOrderList );
      for( let i=0; i<14 ; i++ ){
        const liElement=document.createElement( 'li' );
        unOrderList.appendChild( liElement );
        liElement.textContent= `${workingHours[i]}: ${Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer )}`;
        total= total+ Math.floor( this.customersPerHour[i]*this.avgCookiesSoldPerCustomer );
      }
      const liElement =document.createElement( 'li' );
      unOrderList.appendChild( liElement );
      liElement.textContent=`Total: ${total}`;
      // for(let i = 0; i < this.likes.length; i++) {
      //     const liElement = document.createElement('li');
      //     ulElement.appendChild(liElement);
      //     liElement.textContent = this.likes[i];
      //   }
    }
  };
  //Invoke
  Lima.randomCustomer();
  Lima.render();
  // Global Helper Function
  function customers( min, max ) {
    let cuArr = [];
    for ( let i = 0; i < 15; i++ ) {
      let cu = Math.floor( Math.random() * ( max - min + 1 ) + min );
      cuArr.push( cu );
    }
    return cuArr;
  }