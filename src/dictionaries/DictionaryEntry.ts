import { generateId } from "../common/utils"

class DictionaryEntry {

  id: string;
  from: string;
  to: string;

  private constructor(from: string, to: string) {
    this.id = generateId()
    this.from = from
    this.to = to
  }

  static create(from: string, to: string) {
    return new DictionaryEntry(from, to)
  }

  static recreate(entry: DictionaryEntry) {
    const newEntry = DictionaryEntry.create(entry.from, entry.to)
    newEntry.id = entry.id

    return newEntry
  }
}

export default DictionaryEntry