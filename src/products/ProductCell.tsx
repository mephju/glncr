import React from 'react'
import classes from './ProductCell.module.css';
import toClassName from 'classnames'

interface Props {
  children: any
  align: 'left' | 'right' | 'center'
}

const alignmentMap = {
  left: '',
  center: '',
  right: classes.right,
}

const ProductCell = (props: Props) => {

  const className = toClassName(
    classes.cell,
    alignmentMap[props.align]
  )

  return <td className={className}>
    {props.children}
  </td>

}

ProductCell.defaultProps = {
  align: 'left'
}


export default ProductCell