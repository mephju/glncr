import React, { PureComponent } from 'react'
import Input from '../../common/Input'

interface Props {
  title: string
  onTitleChange: (title: string) => void
}

class DictionaryTitle extends PureComponent<Props> {

  constructor(props: Props) {
    super(props)
    this.onTitleChange = this.onTitleChange.bind(this)
  }

  onTitleChange(name: string, value: string) {
    this.props.onTitleChange(value)
  }

  render() {

    return <Input
      autoFocus
      placeholder='Dictionary Title'
      name='title'
      value={this.props.title}
      onChange={this.onTitleChange}
    />
  }

}

export default DictionaryTitle