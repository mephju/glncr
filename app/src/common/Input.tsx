import React from 'react'
import classes from './Input.module.css'
import classNames from 'classnames'

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
  error: string | undefined
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
    error: undefined,
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onChange(
      this.props.name,
      e.currentTarget.value,
      e,
    )
  }

  render() {

    const className = classNames(
      classes.input, {
      [classes.error]: this.props.error,
    })

    return <input
      placeholder={this.props.placeholder}
      title={this.props.error}
      className={className}
      value={this.props.value}
      onChange={this.onChange}
      type='text'
    />

  }

}


export default Input