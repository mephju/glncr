import Dictionary from "./Dictionary";
import DictionaryEntry from "./DictionaryEntry";

const initialDictionaries = [

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

]

export default initialDictionaries