'use strict';
// Seattle
let time = ['6 am', '7 am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let total = 0;

function Market(name, minCustomers, maxCustomers, customerAvgCookies, avgCookiesHr ) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.customerAvgCookies = customerAvgCookies;
  this.customerArr = [];
  this.hourlyTotal = 0;
  this.avgCookiesHr = avgCookiesHr;
}

Market.prototype.randomCustomer = function () {
  for(let i = 0; i < time.length; i++) {
    let hourSales = Math.ceil(randomNumber(this.minCustomers, this.maxCustomers) * this.customerAvgCookies);
    this.customerArr.push(hourSales);
    this.hourlyTotal += hourSales;
  }
};

Market.prototype.render = function () {
  const tableElement = document.getElementById('placeTable');

  const tr = document.createElement('tr');
  tableElement.appendChild(tr);

  const td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = this.name;

  for(let i = 0; i < time.length; i++) {
    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = this.customerArr[i];
  }

  const td3 = document.createElement('td');
  tr.appendChild(td3);
  td3.textContent = this.hourlyTotal;
};

const tableHeader = function() {
  const parentElement = document.getElementById('Place');
  const table = document.createElement('table');
  parentElement.appendChild(table);
  table.setAttribute('id', 'placeTable');

  const tr1 = document.createElement('tr');
  table.appendChild(tr1);

  const th1 = document.createElement('th');
  tr1.appendChild(th1);
  th1.textContent = 'Location';

  for(let i = 0; i < time.length; i++) {
    const th2 = document.createElement('th');
    tr1.appendChild(th2);
    th2.textContent = time[i];
  }

  const th3 = document.createElement('th');
  tr1.appendChild(th3);
  th3.textContent = 'Total of Totals';
};
tableHeader();

const Seattle = new Market('Seattle', 23, 65, 6.3);
Seattle.randomCustomer(23, 65);
Seattle.render();
console.log(Seattle);

const Tokyo = new Market('Tokyo', 3, 24, 1.2);
Tokyo.randomCustomer(3, 24);
Tokyo.render();
console.log(Tokyo);

const Dubai = new Market('Dubai', 11, 38, 3.7);
Dubai.randomCustomer(11, 38);
Dubai.render();
console.log(Dubai);

const Paris = new Market('Paris', 20, 38, 2.3);
Paris.randomCustomer(20, 38);
Paris.render();
console.log(Paris);

const Lima = new Market('Lima', 2, 16, 4.6);
Lima.randomCustomer(2, 16);
Lima.render();
console.log(Lima);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const tableFooter = function() {
  const tableElement = document.getElementById('placeTable');

  const tr = document.createElement('tr');
  tableElement.appendChild(tr);

  const th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'total';

  for(let i = 0; i < time.length; i++) {
    const th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = Seattle.customerArr[i] + Tokyo.customerArr[i] + Paris.customerArr[i] + Dubai.customerArr[i] + Lima.customerArr[i];
  }

  const th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = Seattle.hourlyTotal + Tokyo.hourlyTotal + Dubai.hourlyTotal + Paris.hourlyTotal + Lima.hourlyTotal;
};

tableFooter();
