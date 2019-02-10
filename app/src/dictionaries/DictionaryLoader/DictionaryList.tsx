import React, { PureComponent } from 'react'
import Input from '../../common/Input'
import initialDictionaries from '../initialDictionaries'
import Dictionary from '../Dictionary';
import DictionaryListItem from './DictionaryListItem';

interface Props {
  dictionaries: Dictionary[]
  // onTitleChange: (title: string) => void
}

class DictionaryList extends PureComponent<Props> {

  constructor(props: Props) {
    super(props)
    // this.onTitleChange = this.onTitleChange.bind(this)
  }

  render() {

    return <ul>
      {this.props.dictionaries.map(dictionary =>
        <DictionaryListItem dictionary={dictionary} />
      )}
    </ul>
  }

}

export default DictionaryList