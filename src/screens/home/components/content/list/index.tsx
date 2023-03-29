import { useState } from 'react'
import { Heading, Text } from '~/components/atoms'
import { Character } from '~/interfaces/api/rickandmorty/character'
import CharacterCard from './card'
import * as S from './styles'

interface ICharactersList {
  startCharacters: Character[]
}

export default function CharactersList({ startCharacters }: ICharactersList) {
  const [characters, setCharacters] = useState<Character[]>(startCharacters)

  return (
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
  )
}
