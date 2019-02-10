import React, { Component } from 'react'
import dictionaryStore from '../dictionaryStore'
import DictionaryList from './DictionaryList';

class DictionaryLoader extends Component {

  render() {

    return <DictionaryList
      dictionaries={dictionaryStore.dictionaries}
    />
  }

}

export default DictionaryLoader