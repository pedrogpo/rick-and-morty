import { CharactersStore, IFilterOptions } from './'

describe('CharactersStore', () => {
  let store: CharactersStore

  beforeEach(() => {
    store = new CharactersStore()
  })

  it('should initialize with default values', () => {
    expect(store.currentPage).toBe(1)
    expect(store.totalPages).toBe(42)
    expect(store.filteredCharacters).toBe(null)
    expect(store.unfilteredCharacters).toBe(null)
    expect(store.options).toEqual({
      name: '',
      status: '',
      species: '',
      gender: '',
    })
  })

  it('should update options', () => {
    const options: IFilterOptions = {
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    }
    store.setOptions(options)
    expect(store.options).toEqual(options)
  })

  it('should apply filter and update filtered characters', async () => {
    const options: IFilterOptions = {
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    }
    await store.applyFilter(options)
    expect(store.filteredCharacters).not.toBe(null)
    expect(store.filteredCharacters?.length).toBeGreaterThan(0)
  })

  it('should remove filter and reset to unfiltered characters', async () => {
    await store.changePage(2)
    await store.applyFilter({
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
    })
    expect(store.filteredCharacters).not.toBe(null)
    store.removeFilter()
    expect(store.filteredCharacters).toBe(null)
    expect(store.currentPage).toBe(1)
  })

  it('should change page and update characters', async () => {
    const initialPage = store.currentPage
    const newPage = initialPage + 1
    await store.changePage(newPage)
    expect(store.currentPage).toBe(newPage)
    expect(store.unfilteredCharacters).not.toBe(null)
    expect(store.unfilteredCharacters?.length).toBeGreaterThan(0)
  })
})
