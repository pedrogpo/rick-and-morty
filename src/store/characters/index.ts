import { makeAutoObservable } from 'mobx'
import { rmApi } from '~/core/http/api'
import { Character, Characters } from '~/interfaces/api/rickandmorty/character'

interface IFilterOptions {
  name: string
  status: string
  species: string
  gender: string
}

export class CharactersStore {
  currentPage: number = 1
  totalPages: number = 42
  filteredCharacters: Character[] | null = null
  unfilteredCharacters: Character[] | null = null

  options: IFilterOptions = {
    name: '',
    status: '',
    species: '',
    gender: '',
  }

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  getQueryUrl() {
    const { currentPage, options } = this
    return `character?page=${currentPage}&name=${options.name}&status=${options.status}&species=${options.species}&gender=${options.gender}`
  }

  async applyFilter(options: IFilterOptions) {
    try {
      this.setOptions(options)

      const { data } = await rmApi.get<Characters>(this.getQueryUrl())

      this.setTotalPages(data.info.pages)
      this.setCurrentPage(1)
      this.setFilteredCharacters(data.results)
    } catch (e) {
      this.setCurrentPage(0)
      this.setTotalPages(0)
      this.setFilteredCharacters([])
    }
  }

  removeFilter() {
    this.options = {
      name: '',
      status: '',
      species: '',
      gender: '',
    }

    this.setTotalPages(42)
    this.setCurrentPage(1)
    this.setFilteredCharacters(null)
  }

  setCurrentPage(page: number) {
    this.currentPage = page
  }

  setTotalPages(count: number) {
    this.totalPages = count
  }

  setOptions(options: IFilterOptions) {
    this.options.name = options.name
    this.options.status = options.status
    this.options.species = options.species
    this.options.gender = options.gender
  }

  setFilteredCharacters(character: Character[] | null) {
    this.filteredCharacters = character
  }

  setUnfilteredCharacters(characters: Character[]) {
    this.unfilteredCharacters = characters
  }

  hasFilter() {
    const { options } = this
    return (
      options.name !== '' ||
      options.status !== '' ||
      options.species !== '' ||
      options.gender !== ''
    )
  }

  get getUnfilteredCharacters() {
    return this.unfilteredCharacters
  }

  get getOptions() {
    return this.options
  }

  updateCharacters(character: Character[]) {
    if (this.filteredCharacters) {
      this.setFilteredCharacters(character)
      return
    }
    this.setUnfilteredCharacters(character)
  }
}

export const charactersStore = new CharactersStore()
