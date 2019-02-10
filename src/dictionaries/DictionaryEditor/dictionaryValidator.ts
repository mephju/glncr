import DictionaryEntry from "../DictionaryEntry";

type MemoryMap = { [key:string]: DictionaryEntry }

export const validateEntries = (entries: DictionaryEntry[]) => {

  const memoryMap = {} as MemoryMap

  return entries.map(entry => {

    if(memoryMap[entry.from]) {

      const message = memoryMap[entry.from].to === entry.to
      ? 'No identical rows'
      : 'No forking rows'

      return message
    }

    memoryMap[entry.from] = entry

    return ''
  })
}