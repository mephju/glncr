import React, { ReactHTMLElement, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classes from './Table.module.css'


type Header = string | ReactNode
interface Props {
  headers: Array<Header> ,
  children: any,
}

const Table = (props: Props) => {

  const { children, headers } = props
  const empty = React.Children.count(children) === 0
  const hasHeaders = headers.length > 0

  if(empty) {
    return <div> No Data </div>
  }
  return <table>
    <thead>
      <tr>
        {props.headers}
      </tr>
    </thead>

    <tbody>
      {children}
    </tbody>

  </table>
}


Table.defaultProps = {
  headers: [],
}

export default Table