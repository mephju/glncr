import React, { PureComponent } from 'react'
import TransformerTable from './DictionaryTable'
import DictionaryEntry from '../DictionaryEntry'
import classes from './DictionaryEditor.module.css'
import Button from '../../common/Button';
import Dictionary from '../Dictionary';
import DictionaryTitle from './DictionaryTitle';

interface Props {
  dictionary: Dictionary,
}

interface State {
  entries: DictionaryEntry[]
  title: string
}


class DictonaryEditor extends PureComponent<Props, State> {

  static defaultProps = {
    dictionary: Dictionary.create(
      '',
      [DictionaryEntry.create('', '')]
    )
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      title: this.props.dictionary.title,
      entries: this.props.dictionary.entries,
    }
    this.createNewEntry = this.createNewEntry.bind(this)
    this.onEntryChange = this.onEntryChange.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
    this.updateTitle = this.updateTitle.bind(this)

  }


  updateEntries(entries: DictionaryEntry[]) {
    // console.log('updateEntries', entries)
    this.setState({entries})
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

  }

  removeDictionary() {

  }

  onEntryChange(entry: DictionaryEntry) {

    const entries = this.state.entries.map(
      e => e.id === entry.id ? entry : e
    )
    this.updateEntries(entries)

  }

  updateTitle(title: string) {
    this.setState({ title })
  }

  render() {

    return <div>

      <DictionaryTitle title={this.state.title} onTitleChange={this.updateTitle} />
      <TransformerTable
        onEntryChange={this.onEntryChange}
        removeEntry={this.removeEntry}
        entries={this.state.entries}
      />
      <div className={classes.dictionaryControls}>

        <Button onClick={this.saveDictionary}>
          Save Dictionary
        </Button>

        <Button onClick={this.removeDictionary}>
          Remove Dictionary
        </Button>

        <Button onClick={this.createNewEntry}>
          Create new Entry
        </Button>

      </div>
    </div>
  }

}


export default DictonaryEditor