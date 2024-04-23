import React from 'react';
import ReactDOM from 'react-dom';

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  show() {
    return this.present() + ', it\'s a ' + this.model;
  }
}

// Define a function called hello
const hello = () => "Hello World!";

const mycar = new Model("Ford", "Mustang");

const myArray = ['apple', 'banana', 'orange'];
const mylist = myArray.map((item) => <p>{item}</p>); // Use consistent variable name

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(mylist); // Use mylist here

ReactDOM.render(
  <div>
    <h1>{hello()}</h1>
    <h2>{mycar.show()}</h2>
  </div>,
  document.getElementById('root')
);
