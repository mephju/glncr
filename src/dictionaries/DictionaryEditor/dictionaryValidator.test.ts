import { validateEntries } from "./dictionaryValidator"
import dictionaryStore from "../dictionaryStore";
import DictionaryEntry from "../DictionaryEntry";

it('validates dictionary correctly', () => {

  const allValid = validateEntries(
    dictionaryStore.dictionaries[0].entries
  ).every(e => e === '')

  expect(allValid).toBeTruthy

})

it('catches forks correctly', () => {
  const [dictionary] = dictionaryStore.dictionaries
  const [entry] = dictionary.entries
  dictionary.entries.push(DictionaryEntry.create(entry.from, 'something else entirely'))

  const allValid = validateEntries(dictionary.entries).every(e => e === '')
  expect(allValid).toBeFalsy
})