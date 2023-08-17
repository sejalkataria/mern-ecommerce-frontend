import React from 'react';
import logo from './logo.svg';
import Counter  from './features/counter/Counter';
import ProductList from './features/product-list/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList></ProductList>
      </header>
    </div>
  );
}

export default App;
