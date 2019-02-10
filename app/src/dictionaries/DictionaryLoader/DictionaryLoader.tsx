import React, { PureComponent } from 'react'
import Input from '../../common/Input'
import initialDictionaries from '../initialDictionaries'
import DictionaryList from './DictionaryList';

interface Props {
  // title: string
  // onTitleChange: (title: string) => void
}

class DictionaryLoader extends PureComponent<Props> {

  constructor(props: Props) {
    super(props)
    // this.onTitleChange = this.onTitleChange.bind(this)

    this.state = {

    }
  }

  render() {

    return <DictionaryList dictionaries={initialDictionaries} />
  }

}

export default DictionaryLoader