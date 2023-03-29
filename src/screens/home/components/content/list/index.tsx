import axios from 'axios'
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

export default function CharactersList({ startCharacters }: ICharactersList) {
  const [characters, setCharacters] = useState<Character[]>(startCharacters || [])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageLoading, setPageLoading] = useState<number | null>(null)

  const handlePageChange = async (pageId: number) => {
    try {
      setPageLoading(pageId)
      const { data: charactersData } = await rmApi.get<Characters>(
        `character?page=${pageId}`
      )

      setCharacters(charactersData.results)
      setCurrentPage(pageId)
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

        {characters.length > 0 ? (
          <S.CharactersListCards>
            {characters.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
          </S.CharactersListCards>
        ) : (
          <Heading size="sm" color="gray_500" weight="semibold">
            No characters found
          </Heading>
        )}
      </S.CharactersList>
      <Pagination
        loading={pageLoading}
        currentPage={currentPage}
        totalPages={42}
        onPageChange={(pageId) => {
          handlePageChange(pageId)
        }}
      />
    </S.Container>
  )
}
