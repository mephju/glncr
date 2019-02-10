import { observable, configure, action } from 'mobx'
import Dictionary from "./Dictionary";
import DictionaryEntry from "./DictionaryEntry";

configure({ enforceActions: 'always' })

const dictionaryStore = observable({
  dictionaries: [

    Dictionary.create('Initial Dictionary 1', [
      DictionaryEntry.create('Anthracite', 'Dark Grey'),
      DictionaryEntry.create('Midnight Black', 'Black'),
      DictionaryEntry.create('Mystic Silver', 'Silver'),
    ]),
    Dictionary.create('Initial Dictionary 2', [
      DictionaryEntry.create('Dark Grey', 'Anthracite'),
      DictionaryEntry.create('Black', 'Midnight Black'),
      DictionaryEntry.create('Silver', 'Mystic Silver'),
    ]),

  ],

  loadedDictionary: undefined as undefined | Dictionary

})

export const loadDictionary = action((dictionary: Dictionary) => {
  dictionaryStore.loadedDictionary = dictionary
})

export const saveDictionary = action((dictionary: Dictionary) => {
  const { dictionaries } = dictionaryStore
  let i = dictionaries.findIndex(d => d.id === dictionary.id)
  if(i === -1) {
    i = dictionaries.length
  }
  dictionaries.splice(i, 1, dictionary)
})

export const removeDictionary = action((dictionaryId: string) => {
  const i = dictionaryStore.dictionaries.findIndex(d => d.id === dictionaryId)
  dictionaryStore.dictionaries.splice(i, 1)
  dictionaryStore.loadedDictionary = undefined
})

export const createNewDictionary = action(() => {
  const dictionary = Dictionary.create('', [])
  dictionaryStore.dictionaries.push(dictionary)
  dictionaryStore.loadedDictionary = dictionary
})


export default dictionaryStore