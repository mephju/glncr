import productStore, { transformProducts } from "./productStore"
import Dictionary from "../dictionaries/Dictionary";
import DictionaryEntry from "../dictionaries/DictionaryEntry";

it('transforms products correctly', () => {
  const fromColor = 'Anthracite'
  const toColor = 'Venom Green'
  const dictionary = Dictionary.create('Test Dict', [
    DictionaryEntry.create(fromColor, toColor)
  ])

  transformProducts(dictionary)

  expect(productStore.products[0].color).toBe(toColor)

  const allGone = productStore.products.every(p => p.color !== fromColor)
  expect(allGone).toBe(true)
})