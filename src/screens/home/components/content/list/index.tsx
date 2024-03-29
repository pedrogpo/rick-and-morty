import * as S from './styles'

import { useState } from 'react'
import { observer } from 'mobx-react'

import { Heading, Text } from '~/components/atoms'
import { Character } from '~/interfaces/api/rickandmorty/character'
import { CharacterCard } from '~/components/molecules'
import { Pagination } from './pagination'

import useClientSideStore from '~/hooks/useClientSideStore'
import { charactersStore } from '~/store/characters'
import { favoritesCharacters } from '~/store/favorites'

import Toast from '~/core/toast'

interface ICharactersList {
  startCharacters: Character[]
}

const CharactersListCards = observer(({ characters }: { characters: Character[] }) => {
  const store = useClientSideStore(favoritesCharacters)

  const renderCharacterCard = (character: Character, index: number) => {
    return (
      <CharacterCard
        index={index}
        key={character.id}
        character={character}
        isFavorite={store?.isFavorite(character) || false}
        onFavoriteClick={() => {
          favoritesCharacters.toggleFavorite(character)
        }}
      />
    )
  }

  return (
    <S.CharactersListCards>
      {characters.map((character, index) => renderCharacterCard(character, index))}
    </S.CharactersListCards>
  )
})

function CharactersList({ startCharacters }: ICharactersList) {
  const [pageLoading, setPageLoading] = useState<number | null>(null)

  const handlePageChange = async (pageId: number) => {
    try {
      setPageLoading(pageId)

      await charactersStore.changePage(pageId)
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

  const charactersToShow =
    charactersStore.filteredCharacters ||
    charactersStore.unfilteredCharacters ||
    startCharacters

  const currentPage = charactersStore.currentPage
  const totalPages = charactersStore.totalPages

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
        {charactersToShow && charactersToShow.length > 0 ? (
          <CharactersListCards characters={charactersToShow} />
        ) : (
          <Heading size="sm" color="gray_500" weight="semibold">
            No characters found
          </Heading>
        )}
      </S.CharactersList>
      <Pagination
        pageLoading={pageLoading}
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
