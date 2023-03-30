import { makeAutoObservable } from 'mobx'
import { Character } from '~/interfaces/api/rickandmorty/character'

export class FavoritesCharacters {
  favoritesList: Character[] = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  addFavorite(character: Character) {
    if (!this.favoritesList.find((favorite) => favorite.id === character.id))
      this.favoritesList.push(character)
  }

  removeFavorite(character: Character) {
    this.favoritesList = this.favoritesList.filter(
      (favorite) => favorite.id !== character.id
    )
  }

  toggleFavorite(character: Character) {
    this.isFavorite(character)
      ? this.removeFavorite(character)
      : this.addFavorite(character)
  }

  isFavorite(character: Character): boolean {
    return !!this.favoritesList.find((favorite) => favorite.id === character.id)
  }

  get favorites() {
    return this.favoritesList
  }

  get favoritesCount() {
    return this.favoritesList.length
  }
}

export const favoritesCharacters = new FavoritesCharacters()
