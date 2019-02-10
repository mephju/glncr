import React, { PureComponent } from 'react'
import Table from '../../common/Table/Table'
import EditableDictionaryRow from './EditableDictionaryRow';
import DictionaryEntry from '../DictionaryEntry';

interface Props {
  entries: DictionaryEntry[],
  entryValidations: string[],
  onEntryChange: (entry: DictionaryEntry) => void,
  removeEntry: (entry: DictionaryEntry) => void,
}


class EditableDictionaryTable extends PureComponent<Props> {

  render() {

    const {
      entryValidations, removeEntry, onEntryChange
    } = this.props

    return <Table>

      {this.props.entries.map((entry, i) =>
        <EditableDictionaryRow
          key={entry.id}
          entry={entry}
          removeEntry={removeEntry}
          onEntryChange={onEntryChange}
          errorMessage={entryValidations[i]}
        />
      )}

    </Table>
  }

}

export default EditableDictionaryTable