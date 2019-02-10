import React, { Component } from 'react'
import Table from '../common/Table'
import ProductCell from './ProductCell'
import ProductHeader from './ProductHeader'
import productStore, { Product } from './productStore'
import { observable } from 'mobx'
import { observer } from 'mobx-react';

interface Props {
  products: Product[]
}

const headers = ['Product', 'Color', 'Price']

@observer
class ProductTable extends Component<Props> {

  render() {
    const jsxHeaders = headers.map(header => (
      <ProductHeader
        key={header}
        header={header}
      />
    ))

    return <Table headers={jsxHeaders}>

      {this.props.products.map(product => (
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

}

export default () => <ProductTable products={productStore.products}/>