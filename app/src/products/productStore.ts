import { observable, action } from 'mobx'
import Dictionary from '../dictionaries/Dictionary'

export interface Product {
  id: string
  title: string
  color: string
  price: number
  currency: string
}

const productStore = observable({

  products: [
    { id: 'Apple-iphone-6s', title: 'Apple iPhone 6s', color: 'Anthracite', price: 769, currency: 'CHF' },
    { id: 'Samung-Galaxy-S8', title: 'Samsung Galaxy S8', color: 'Midnight Black', price: 569, currency: 'CHF' },
    { id: 'Huawei-P9', title: 'Huawei P9', color: 'Mystic Silver', price: 272, currency: 'CHF' },

    { id: 'Apple-iphone-10', title: 'Apple iPhone 10', color: 'White', price: 769, currency: 'CHF' },
    { id: 'Samung-Galaxy-S10', title: 'Samsung Galaxy S10', color: 'Black', price: 569, currency: 'CHF' },
    { id: 'Huawei-P11', title: 'Huawei P11', color: 'Pink', price: 572, currency: 'CHF' },

    { id: 'Apple-iphone-200', title: 'Apple iPhone 200', color: 'Purple', price: 1669, currency: 'CHF' },
    { id: 'Samung-Galaxy-S88', title: 'Samsung Galaxy S88', color: 'Sun Black', price: 569, currency: 'CHF' },
    { id: 'Huawei-P999', title: 'Huawei P999', color: 'Virgin White', price: 999, currency: 'CHF' },
  ]
})

export const transformProducts = action((dictionary: Dictionary) => {

  const {entries} = dictionary
  const {products} = productStore

  entries.forEach(entry => {
    const index = products.findIndex(p => p.color === entry.from)
    if(index > -1) {
      products[index].color = entry.to
    }
  })


})

export default productStore