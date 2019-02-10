import { generateId } from './../common/utils'
import DictionaryEntry from "./DictionaryEntry"

class Dictionary {

  id: string
  title: string
  entries: DictionaryEntry[]

  private constructor(id: string, title: string, entries: DictionaryEntry[]) {
    this.id = id
    this.title = title
    this.entries = entries
  }

  static create(title: string, entries: DictionaryEntry[]) {
    return new Dictionary(generateId(), title, entries)
  }

  static recreate(id: string, title: string, entries: DictionaryEntry[]) {
    return new Dictionary(id, title, entries)
  }
}

export default Dictionary