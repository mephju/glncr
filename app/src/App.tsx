import React, { Component } from 'react'
import ProductTable from './products/ProductTable'
import DictonaryEditor from './dictionaries/DictionaryEditor/DictionaryEditor'
import DictionaryLoader from './dictionaries/DictionaryLoader/DictionaryLoader'
import { observer } from 'mobx-react'
import dictionaryStore from './dictionaries/dictionaryStore'
import classes from './App.module.css'

@observer class App extends Component {
  render() {
    return <div className={classes.app}>
      <section>
        <h1> Products </h1>
        <ProductTable />
      </section>

      <section>
        <h1> Dictionaries</h1>
        <DictionaryLoader />
      </section>

      { dictionaryStore.loadedDictionary &&
        <section>
          <h1> Dictionary Editor </h1>
          <DictonaryEditor
            key={dictionaryStore.loadedDictionary.id}
            dictionary={dictionaryStore.loadedDictionary}
          />
        </section>
      }

    </div>
  }
}

interface P {
  store: any
}
@observer class List extends Component<P> {
  render() {
    console.log('list', this.props.store.array)
    return <div>

        {this.props.store.array.map((a: string) => 'asdasdfsdafajfsadf' + a)}
      </div>
  }
}

export default App;
