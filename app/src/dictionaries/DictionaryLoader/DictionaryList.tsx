import React, { PureComponent, Component } from 'react'
import Dictionary from '../Dictionary';
import DictionaryListItem from './DictionaryListItem';
import { observer } from 'mobx-react';
import ListItem from '../../common/ListItem';
import Button from '../../common/Button';
import { createNewDictionary } from '../dictionaryStore';

interface Props {
  dictionaries: Dictionary[]
}

@observer class DictionaryList extends Component<Props> {

  render() {

    return <ul>
      {this.props.dictionaries.map(dictionary =>
        <DictionaryListItem
          key={dictionary.id}
          dictionary={dictionary}
        />
      )}
      <ListItem>
        <Button onClick={createNewDictionary}>
          Create new Dictionary
        </Button>
      </ListItem>
    </ul>
  }

}

export default DictionaryList