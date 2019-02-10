import React, { Component } from 'react'
import { transformProducts } from '../../products/productStore'
import Dictionary from '../Dictionary'
import Button from '../../common/Button';

interface Props {
  dictionary: Dictionary
}

class ProductTransformerButton extends Component<Props> {

  constructor(props: Props) {
    super(props)

    this.transformProducts = this.transformProducts.bind(this)
  }

  transformProducts() {
    transformProducts(this.props.dictionary)
  }

  render() {

    return <Button onClick={this.transformProducts}>
      Transform Products
    </Button>
  }

}

export default ProductTransformerButton