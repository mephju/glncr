import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './common/Table/Table'
import ProductTable from './products/ProductTable'

class App extends Component {
  render() {
    return <div className="App">
      <div className="body">

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <section>
          <h1> Source Data </h1>
          <ProductTable />
        </section>

        <section>
          <h1> Transforming Data </h1>
          <ProductTable />
        </section>

        <section>
          <h1> Transformed Data </h1>
          <ProductTable />
        </section>
      </div>

    </div>
  }
}

export default App;
