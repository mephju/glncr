import React, { PureComponent } from 'react'
import Table from '../../common/Table/Table'
import DictionaryRow from './DictionaryRow';
import DictionaryEntry from '../DictionaryEntry';

interface Props {
  entries: DictionaryEntry[],
  onEntryChange: (entry: DictionaryEntry) => void,
  removeEntry: (entry: DictionaryEntry) => void,
}
class TransformerTable extends PureComponent<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {

    return <Table>

      {this.props.entries.map(entry =>
        <DictionaryRow
          key={entry.id}
          entry={entry}
          removeEntry={this.props.removeEntry}
          onEntryChange={this.props.onEntryChange}
        />
      )}

    </Table>
  }

}

export default TransformerTable