import React, { PureComponent } from 'react'
import ListItem from '../../common/ListItem'
import Dictionary from '../Dictionary'
import classes from './DictionaryListItem.module.css'
import Button from '../../common/Button'
import { loadDictionary } from '../dictionaryStore'

interface Props {
  dictionary: Dictionary
}

class DictionaryListItem extends PureComponent<Props> {

  constructor(props: Props) {
    super(props)
    this.onDictionaryLoad = this.onDictionaryLoad.bind(this)
  }

  onDictionaryLoad() {
    loadDictionary(this.props.dictionary)
  }

  render() {

    const {dictionary} = this.props

    return <ListItem>
      <div className={classes.dictionaryListItem}>

        <div className={classes.cell}>
          <div className={classes.title}>
            {dictionary.title || 'UNNAMED'}
          </div>
          <div className={classes.size}>
            {dictionary.entries.length} Entries
          </div>
        </div>


        <Button onClick={this.onDictionaryLoad}>
          Load Dictionary
        </Button>
      </div>
    </ListItem>
  }

}

export default DictionaryListItem