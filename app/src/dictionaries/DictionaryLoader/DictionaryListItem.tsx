import React, { PureComponent } from 'react'
import Input from '../../common/Input'
import initialDictionaries from '../initialDictionaries'
import ListItem from '../../common/ListItem'
import Dictionary from '../Dictionary'
import classes from './DictionaryListItem.module.css'
import Button from '../../common/Button';

interface Props {
  dictionary: Dictionary
}

class DictionaryListItem extends PureComponent<Props> {

  constructor(props: Props) {
    super(props)
  }

  render() {

    const {dictionary: dict} = this.props

    return <ListItem>
      <div className={classes.dictionaryListItem}>

        <div className={classes.cell}>
          {dict.title}
        </div>

        <div className={classes.cell}>
          {dict.entries.length} Entries
        </div>

        <Button onClick={console.log}>
          Load Dictionary
        </Button>
      </div>
    </ListItem>
  }

}

export default DictionaryListItem