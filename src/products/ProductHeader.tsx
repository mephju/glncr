import React, { ReactElement, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classes from './ProductHeader.module.css'

type Header = string | ReactNode

interface Props {
  header: Header
}

const ProductHeader = (props: Props) => {

  return <th className={classes.header}>
    {props.header}
  </th>
}


ProductHeader.defaultProps = {
  header: ''
}

export default ProductHeader