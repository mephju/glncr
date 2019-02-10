import { entries } from 'mobx';
import DictionaryEntry from "./DictionaryEntry"

class Dictionary {

  title: string
  entries: DictionaryEntry[]

  private constructor(title: string, entries: DictionaryEntry[]) {
    this.title = title
    this.entries = entries
  }

  static create(title: string, entries: DictionaryEntry[]) {
    return new Dictionary(title, entries)
  }
}

export default Dictionary