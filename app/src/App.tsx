import React, { Component } from 'react';
import './App.css';
import ProductTable from './products/ProductTable'
import DictonaryEditor from './dictionaries/DictionaryEditor/DictionaryEditor';
import DictionaryLoader from './dictionaries/DictionaryLoader/DictionaryLoader';

class App extends Component {
  render() {
    return <div className="App">
      <div className="body">

        <section>
          <h1> Source Data </h1>
          <ProductTable />
          <h1> Transformed Data </h1>
          <ProductTable />
        </section>

        <section>
          <h1> Dictionaries</h1>
          <DictionaryLoader />
        </section>

        <section>
          <h1> Dictionary </h1>
          <DictonaryEditor />
        </section>

      </div>

    </div>
  }
}

export default App;
