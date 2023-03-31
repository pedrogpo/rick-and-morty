import { makeAutoObservable } from 'mobx'
import { Character } from '~/interfaces/api/rickandmorty/character'
import {
  makePersistable,
  isHydrated,
  isPersisting,
  stopPersisting,
  clearPersistedStore,
} from 'mobx-persist-store'
import localForage from 'localforage'

import { enableStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

export class FavoritesCharacters {
  favoritesList: Character[] = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })

    if (!isServer)
      makePersistable(this, {
        name: 'favoriteList',
        properties: ['favoritesList'],
        storage: localForage,
      })
  }

  clearPersistedData() {
    localForage.clear()
    stopPersisting(this)
    return clearPersistedStore(this)
  }

  get isHydrated() {
    return isHydrated(this)
  }

  get isPersisting() {
    return isPersisting(this)
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
