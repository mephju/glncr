import Dictionary from "../dictionaries/Dictionary";
import DictionaryEntry from "../dictionaries/DictionaryEntry";
import dictionaryStore, { loadDictionary, removeDictionary, createNewDictionary } from "./dictionaryStore"

it('loads dictionaries correctly', () => {

  const {loadedDictionary, dictionaries} = dictionaryStore
  const [dictionary] = dictionaries


  expect(loadedDictionary).toBe(undefined)

  loadDictionary(dictionary)

  expect(dictionaryStore.loadedDictionary).toBe(dictionary)
})

it('removes dictionaries correctly', () => {
  const {dictionaries} = dictionaryStore
  const [dictionary] = dictionaries

  removeDictionary(dictionary.id)
  const deleted = dictionaries.every(d => d.id !== dictionary.id)

  expect(deleted).toBeTruthy
})


it('creates new dictionaries', () => {
  const {dictionaries} = dictionaryStore
  const {length: before} = dictionaries
  createNewDictionary()
  const {length: after} = dictionaries

  expect(before).toBeLessThan(after)

})