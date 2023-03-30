import { makeAutoObservable } from 'mobx'
import { rmApi } from '~/core/http/api'
import { Character, Characters } from '~/interfaces/api/rickandmorty/character'

interface filterOptions {
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

  options: filterOptions = {
    name: '',
    status: '',
    species: '',
    gender: '',
  }

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  getQueryUrl() {
    return `character?page=${this.currentPage}&name=${this.options.name}&status=${this.options.status}&species=${this.options.species}&gender=${this.options.gender}`
  }

  async applyFilter(options: filterOptions) {
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

  setOptions(options: filterOptions) {
    this.options.name = options.name
    this.options.status = options.status
    this.options.species = options.species
    this.options.gender = options.gender
  }

  setFilteredCharacters(character: Character[] | null) {
    this.filteredCharacters = character
  }

  hasFilter() {
    return (
      this.options.name !== '' ||
      this.options.status !== '' ||
      this.options.species !== '' ||
      this.options.gender !== ''
    )
  }

  setUnfilteredCharacters(characters: Character[]) {
    this.unfilteredCharacters = characters
  }

  get getUnfilteredCharacters() {
    return this.unfilteredCharacters
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
