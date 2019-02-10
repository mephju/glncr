import React from 'react'
import classes from './Input.module.css'
// import classNames from 'classnames'

type OnChange = (
  name: string,
  value: string,
  e?: React.FormEvent<HTMLInputElement>
) => void

interface Props {
  placeholder: string;
  name: string,
  onChange: OnChange
  value: string,
  autoFocus: boolean;
}


class Input extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  static defaultProps: {
    placeholder: '',
    value: '',
    autoFocus: false,
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onChange(
      this.props.name,
      e.currentTarget.value,
      e,
    )
  }

  render() {

    return <input
      className={classes.input}
      {...this.props}
      onChange={this.onChange}
      type='text'
    />

  }

}


export default Input