import React from 'react'
import PropTypes from 'prop-types'
import products from './products'
import Table from '../common/Table/Table'
import ProductCell from './ProductCell';
import ProductHeader from './ProductHeader';

interface Props {

}

const headers = ['Product', 'Color', 'Price']

const ProductTable = (props: Props) => {

  const jsxHeaders = headers.map(header => (
    <ProductHeader
      key={header}
      header={header}
    />
  ))

  return <Table headers={jsxHeaders}>

    {products.map(product => (
      <tr key={product.id}>
        <ProductCell> {product.title} </ProductCell>
        <ProductCell> {product.color} </ProductCell>
        <ProductCell align='right'>
          {product.price} {product.currency}
        </ProductCell>
      </tr>
    ))}

  </Table>

}

export default ProductTable