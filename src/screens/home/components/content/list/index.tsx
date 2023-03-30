import { useState } from 'react'
import { Heading, Text } from '~/components/atoms'
import { rmApi } from '~/core/http/api'
import Toast from '~/core/toast'
import { Character, Characters } from '~/interfaces/api/rickandmorty/character'
import CharacterCard from './card'
import { Pagination } from './pagination'
import * as S from './styles'

interface ICharactersList {
  startCharacters: Character[]
}

import { observer } from 'mobx-react'

import { favoritesCharacters } from '~/store/favorites'
import { filteredOptions } from '~/store/filter'

const CharactersListCards = observer(({ characters }: { characters: Character[] }) => {
  const renderCharacterCard = (character: Character) => (
    <CharacterCard
      character={character}
      isFavorite={favoritesCharacters.isFavorite(character)}
      onFavoriteClick={() => favoritesCharacters.toggleFavorite(character)}
    />
  )

  return (
    <S.CharactersListCards>
      {characters.map((character) => renderCharacterCard(character))}
    </S.CharactersListCards>
  )
})

function CharactersList({ startCharacters }: ICharactersList) {
  const [characters, setCharacters] = useState<Character[]>(startCharacters ?? [])
  const [pageLoading, setPageLoading] = useState<number | null>(null)

  const handlePageChange = async (pageId: number) => {
    try {
      setPageLoading(pageId)
      filteredOptions.setCurrentPage(pageId)

      const { data: charactersData } = await rmApi.get<Characters>(
        filteredOptions.getQueryUrl()
      )

      if (filteredOptions.filteredCharacters) {
        filteredOptions.setFilteredCharacters(charactersData.results)
      } else {
        setCharacters(charactersData.results)
      }
    } catch (error) {
      // we can use the HttpError from ~/core/errors if we want to handle it
      Toast({
        message: 'An error occurred while trying to get the characters',
        type: 'error',
      })
    } finally {
      setPageLoading(null)
    }
  }

  const charactersToShow = filteredOptions.filteredCharacters || characters

  const currentPage = filteredOptions.currentPage
  const totalPages = filteredOptions.totalPages

  return (
    <S.Container>
      <S.CharactersList>
        <S.CharactersListHead>
          <Heading as="h2" size="lg" color="gray_100" weight="bold">
            Characters List
          </Heading>
          <Text size="xl" color="gray_300" weight="medium">
            You can click on a card to see more info
          </Text>
        </S.CharactersListHead>
        {charactersToShow.length > 0 ? (
          <CharactersListCards characters={charactersToShow} />
        ) : (
          <Heading size="sm" color="gray_500" weight="semibold">
            No characters found
          </Heading>
        )}
      </S.CharactersList>
      <Pagination
        loading={pageLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(pageId) => {
          handlePageChange(pageId)
        }}
      />
    </S.Container>
  )
}

export default observer(CharactersList)
