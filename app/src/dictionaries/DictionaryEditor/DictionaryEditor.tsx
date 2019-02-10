import React, { Component } from 'react'
import EditableDictionaryTable from './EditableDictionaryTable'
import DictionaryEntry from '../DictionaryEntry'
import Button from '../../common/Button'
import Dictionary from '../Dictionary'
import DictionaryTitle from './DictionaryTitle'
import { saveDictionary, removeDictionary } from '../dictionaryStore'
import { observer } from 'mobx-react';
import { validateEntries } from './dictionaryValidator'
import ProductTransformerButton from './ProductTransformerButtons';

interface Props {
  dictionary: Dictionary
}

interface State {
  id: string
  entries: DictionaryEntry[]
  title: string
}

const isValidDictionary = (entries: DictionaryEntry[]) => {
  return !validateEntries(entries).some(t => !!t)
}

@observer class DictonaryEditor extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    const {dictionary} = props

    this.state = {
      id: dictionary.id,
      title: dictionary.title,
      entries: dictionary.entries,
    }

    this.createNewEntry = this.createNewEntry.bind(this)
    this.onEntryChange = this.onEntryChange.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.saveDictionary = this.saveDictionary.bind(this)
    this.removeDictionary = this.removeDictionary.bind(this)

  }

  updateEntries(entries: DictionaryEntry[]) {
    this.setState({ entries })
  }

  createNewEntry() {
    this.updateEntries([
      ...this.state.entries,
      DictionaryEntry.create('', ''),
    ])
  }

  removeEntry(entry: DictionaryEntry) {
    const {entries} = this.state
    this.updateEntries(entries.filter(e => e.id !== entry.id))
  }

  saveDictionary() {
    if(isValidDictionary(this.state.entries)) {
      saveDictionary(Dictionary.recreate(
        this.state.id,
        this.state.title,
        this.state.entries
      ))
    }
  }

  removeDictionary() {
    removeDictionary(this.state.id)
  }

  onEntryChange(entry: DictionaryEntry) {
    const replace = (e: DictionaryEntry) => e.id === entry.id ? entry : e
    const entries = this.state.entries.map(replace)
    this.updateEntries(entries)
  }

  updateTitle(title: string) {
    this.setState({ title })
  }

  render() {

    const entryValidations = validateEntries(this.state.entries)

    return <div>

      <DictionaryTitle title={this.state.title} onTitleChange={this.updateTitle} />
      <Button onClick={this.createNewEntry}>
        Create new Entry
      </Button>
      <EditableDictionaryTable
        onEntryChange={this.onEntryChange}
        removeEntry={this.removeEntry}
        entries={this.state.entries}
        entryValidations={entryValidations}
      />

      <div>
        <Button onClick={this.saveDictionary}>
          Save Dictionary
        </Button>

        <Button onClick={this.removeDictionary}>
          Remove Dictionary
        </Button>
      <ProductTransformerButton dictionary={this.state} />
      </div>


    </div>
  }

}


export default DictonaryEditor