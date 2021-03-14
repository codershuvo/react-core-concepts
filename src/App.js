import React, { useEffect, useState } from 'react'; 
import './App.css';

function App() {
  const friendsName = ['Anwar', 'Bappi', 'Jafor Iqbal', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: "$90.99"}, 
    {name: "Illustrator", price: "$150.99"}, 
    {name: "Pdf Remover", price: "$50.99"}, 
    {name: "Adobe XD", price: "$60.99"}, 
    {name: "Primier Element", price: "$260.99"}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        
        <Counter></Counter>

        <Users></Users>
        <ul>
          {
            friendsName.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      
        {
          friendsName.map(friend => <Person name={friend}></Person>)
        }

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10); 
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1) }>Decrease</button>
      <button onClick={ () => setCount(count + 1) }>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: "1px solid gray", 
    borderRadius: "5px", 
    backgroundColor: "lightgrey", 
    height:'300px', 
    width:'300px', 
    float: 'left',
    margin:'20px'
  }
  const {name, price} = props.product; 
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow', 
    width: '400px', 
    margin: '10px', 
    backgroundColor: 'lightgrey', 
    color: 'black'
  }
  return (
    <div style={personStyle}>
      <h2>Name: {props.name}</h2>
    </div>
  )
}

export default App;
