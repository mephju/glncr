import React from 'react'
import PropTypes from 'prop-types'
import products from './products'
import Table from '../common/Table/Table'

const ProductTable = props => {
  return <Table headers={['Product', 'Color', 'Price']}>

    {products.map(product => (
      <tr>
        <td> {product.title} </td>
        <td> {product.color} </td>
        <td> {product.price} </td>
        <td> {product.currency} </td>
      </tr>
    ))}

  </Table>

}

ProductTable.propTypes = {

}

export default ProductTable