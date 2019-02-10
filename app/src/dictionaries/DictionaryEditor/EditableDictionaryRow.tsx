import React, { PureComponent } from 'react'
import Input from "../../common/Input"
import DictionaryEntry from '../DictionaryEntry'
import Button from '../../common/Button'
import classes from './EditableDictionaryRow.module.css'

interface Props {
  onEntryChange: (entry: DictionaryEntry) => void
  removeEntry: (entry: DictionaryEntry) => void
  entry: DictionaryEntry
  errorMessage: string | undefined
}

class EditableDictionaryRow extends PureComponent<Props> {

  constructor(props: Props) {
    super(props)

    this.onFromFieldChange = this.onFromFieldChange.bind(this)
    this.onToFieldChange = this.onToFieldChange.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
  }

  onToFieldChange(name: string, value: string) {
    const oldEntry = this.props.entry
    const newEntry = DictionaryEntry.recreate(oldEntry)
    newEntry.to = value
    this.props.onEntryChange(newEntry)
  }

  onFromFieldChange(name: string, value: string) {
    const oldEntry = this.props.entry
    const newEntry = DictionaryEntry.recreate(oldEntry)
    newEntry.from = value
    this.props.onEntryChange(newEntry)
  }

  removeEntry() {
    this.props.removeEntry(this.props.entry)
  }

  render() {


    const {entry, errorMessage} = this.props

    return <tr>
      <td>
        <Input
          placeholder='From'
          name={`${entry.id}.from`}
          value={entry.from}
          onChange={this.onFromFieldChange}
          error={errorMessage}
        />
        {errorMessage && (
          <div className={classes.error}> {errorMessage} </div>
        )}
      </td>

      <td>
        <Input
          placeholder='To'
          name={`${entry.id}.to`}
          value={entry.to}
          onChange={this.onToFieldChange}
          error={errorMessage}
        />
      </td>

      <td>
        <Button onClick={this.removeEntry as any}>
          X
        </Button>

      </td>

    </tr>
  }

}

export default EditableDictionaryRow