import * as S from './styles'
import Link from 'next/link'

import { BiChevronLeft } from 'react-icons/bi'

import { Heading, Text } from '~/components/atoms'
import { Character } from '~/interfaces/api/rickandmorty/character'
import { Location } from '~/interfaces/api/rickandmorty/location'

import CharacterInfoContent from './character-info'
import CharacterEpisodeContent from './episode-content'

export default function Content({
  characterData,
  originData,
}: {
  characterData: Character
  originData: Location
}) {
  return (
    <S.Content>
      <Link href="/">
        <S.BackButtonContainer>
          <S.BackButton>
            <BiChevronLeft color="white" size={36} />
          </S.BackButton>
          <Text size="xl" weight="semibold" color="gray_100">
            Go back
          </Text>
        </S.BackButtonContainer>
      </Link>
      <S.MainContainer>
        {characterData ? (
          <>
            <S.CharacterInfoCol>
              <CharacterInfoContent
                originData={originData}
                characterData={characterData}
              />
            </S.CharacterInfoCol>
            <S.CharacterEpisodesCountCol>
              <CharacterEpisodeContent characterData={characterData} />
            </S.CharacterEpisodesCountCol>
          </>
        ) : (
          <Heading size="md" weight="bold" color="gray_100">
            Something went wrong, please try again later.
          </Heading>
        )}
      </S.MainContainer>
    </S.Content>
  )
}
