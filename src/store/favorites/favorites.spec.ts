import { FavoritesCharacters } from './'
import { Character } from '~/interfaces/api/rickandmorty/character'

describe('FavoritesCharacters', () => {
  let favorites: FavoritesCharacters

  const character: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  }

  beforeEach(() => {
    favorites = new FavoritesCharacters()
  })

  afterEach(async () => {
    await favorites.clearPersistedData()
  })

  it('should add a favorite character', () => {
    favorites.addFavorite(character)
    expect(favorites.favorites).toEqual([character])
  })

  it('should remove a favorite character', () => {
    favorites.addFavorite(character)
    favorites.removeFavorite(character)
    expect(favorites.favorites).toEqual([])
  })

  it('should toggle a favorite character', () => {
    favorites.toggleFavorite(character)
    expect(favorites.favorites).toEqual([character])
    favorites.toggleFavorite(character)
    expect(favorites.favorites).toEqual([])
  })

  it('should check if a character is a favorite', () => {
    expect(favorites.isFavorite(character)).toBe(false)
    favorites.addFavorite(character)
    expect(favorites.isFavorite(character)).toBe(true)
  })

  it('should get the count of favorite characters', () => {
    const character2: Character = {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z',
    }
    favorites.addFavorite(character)
    favorites.addFavorite(character2)
    expect(favorites.favoritesCount).toBe(2)
  })
})
